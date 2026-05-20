"use client"

import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import ChatArea from "./chatarea"
import { IUser } from "./Check"
import { IGroupChat } from "../[slug]/groupchat"

export interface Result {
    student_id: string
    gender: string
    age: number
    study_hours: number
    sleep_hours: number
    final_score: number
    passed: boolean
}

interface IChatInput {
    user: IUser
    slug?: string
}

const ChatInput = ({ user, slug }: IChatInput) => {
  const [query, setQuery] = useState<string>("")
  const [resultArray, setArray] = useState<any[]>([])
  const [isTitle, setTitie] = useState<boolean>(false)

  const inputRef = useRef<HTMLTextAreaElement>(null)

  // ======================
  // GET CHAT (FIXED)
  // ======================
  useEffect(() => {
    if (!slug) return

    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null

    console.log("TOKEN GET:", token)

    if (!token) return

    axios
      .get<IGroupChat>(
        `http://127.0.0.1:8000/api/groupchat/${slug}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        const fetched = res.data

        setArray(fetched.data.chats || [])
        setTitie(!!fetched.data.text)
      })
      .catch((err) => {
        console.log("GET CHAT ERROR:", err.response?.data || err.message)
      })
  }, [slug])

  // ======================
  // SUBMIT CHAT (FIXED)
  // ======================
  const handleSubmit = async () => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null

    console.log("TOKEN POST:", token)

    if (!slug || !query || !token) return

    try {
      if (inputRef.current) inputRef.current.value = ""
      setQuery("")

      const pending = {
        query: "",
        data: [],
        response: "",
        question: query,
        status: false,
      }

      setArray((prev) => [...prev, pending])

      const res = await axios.post(
        `http://127.0.0.1:8000/api/addchat/${slug}`,
        {
          queryInput: query,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      )

      const fetched = res.data

      setArray((prev) => {
        const newArr = [...prev]
        const lastIndex = newArr.length - 1

        if (lastIndex >= 0) {
          newArr[lastIndex] = {
            query: fetched.data.query,
            data: fetched.data.result,
            response: fetched.data.response,
            question: query,
            status: true,
          }
        }

        return newArr
      })

      // generate title once
      if (!isTitle) {
        await axios.post(
          `http://127.0.0.1:8000/api/requestTitle`,
          {
            slug,
            pertanyaan: query,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        )

        setTitie(true)
      }
    } catch (err: any) {
      console.log("POST ERROR:", err.response?.data || err.message)
    }
  }

  return (
    <>
      <ChatArea arrayResult={resultArray} user={user} slug={slug} />

      <div className="w-full flex justify-center py-4 px-4 bottom-0 bg-neutral-100/10 backdrop-blur absolute">
        <div className="w-full max-w-3xl">
          <div className="bg-[#1e1f20] rounded-full p-2 flex justify-between items-center">

            <textarea
              value={query}
  onChange={(e) => setQuery(e.target.value)}
              placeholder="Tanya database..."
              className="bg-transparent text-white w-full px-4 outline-none"
              disabled={!slug}
            />

            <button
              onClick={handleSubmit}
              className="p-3 px-6 bg-white text-black rounded-full"
            >
              Kirim
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ChatInput