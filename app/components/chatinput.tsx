"use client"

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ChatArea, { IChartArea } from './chatarea';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { IUser } from './Check';
import { IGroupChat } from '../[slug]/groupchat';

interface IChatInput {
    user: IUser
    slug?: string
}

export interface TopLevel {
    status: string;
    message: string;
    data: Data;
}

export interface Data {
    result: Result[];
    response: string;
    query: string;
}

export interface Result {
    id: number;
    student_id: string;
    gender: Gender;
    age: number;
    study_hours: number;
    attendance_pct: number;
    sleep_hours: number;
    final_score: number;
    passed: number;
    created_at: null;
    updated_at: null;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}


const ChatInput = ({ user, slug }: IChatInput) => {
    const [query, setQuery] = useState<string>()
    const [resultArray, setArray] = useState<IChartArea[]>([])
    const [isTitle, setTitie] = useState<boolean>()

    const inputRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {

        if (slug) {

            const token = typeof window ? localStorage.getItem("token") : null
            axios.get<IGroupChat>(`http://127.0.0.1:8000/api/groupchat/${slug}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'Application/json'
                }
            })
                .then(data => {
                    const fetched = data.data
                    console.log('disini')
                    setArray(fetched.data.chats)
                    if (fetched.data.text) {
                        setTitie(true)
                    } else {
                        setTitie(false)
                    }
                })
        }

    }, [slug])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = () => {
        const token = localStorage.getItem("token")
        if (slug) {

            if (query && inputRef.current && token) {
                inputRef.current.value = ""
                try {
                    const pendingObject: IChartArea = ({
                        query: "",
                        data: [],
                        response: "",
                        question: query,
                        status: false
                    })
                    const updateArray = [...resultArray, pendingObject]
                    setArray(updateArray)
                    console.log("AI sedang berpikir")
                    axios.post<TopLevel>(`http://127.0.0.1:8000/api/addchat/${slug}`, {
                        queryInput: query
                    }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "Application/json"
                        }
                    })
                        .then(data => {
                            const fetched = data.data
                            setArray(prevArray => {
                                const newArray = [...prevArray]
                                const lastIndex = newArray.length - 1

                                newArray[lastIndex] = {
                                    query: fetched.data.query,
                                    data: fetched.data.result,
                                    response: fetched.data.response,
                                    question: query,
                                    status: true
                                }
                                return newArray
                            })

                            if (!isTitle) {
                                axios.post<IGroupChat>(`http://127.0.0.1:8000/api/requestTitle`, {
                                    slug: slug,
                                    pertanyaan: query
                                }, {
                                    headers: {
                                        Authorization: `Bearer ${token}`,
                                        Accept: 'Application/json'
                                    }
                                })
                                    .then(data => {
                                        const fetched = data.data
                                        console.log(fetched)
                                    })
                            }
                        })
                } catch (e) {
                    console.log(e)
                }
            }
        } else {
            axios.post("http://127.0.0.1:8000/api/groupchat", {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'Application/json'
                }
            })
                .then(data => {
                    const fetched = data.data
                    location.href = `/${fetched.data.slug}`
                })
        }
    }

    return (
        <>
            {resultArray && (
                <ChatArea arrayResult={resultArray.reverse()} user={user} slug={slug} />
            )}
            <div className="w-full flex justify-center py-4 px-4 from-[#000000] via-[#131314] to-transparent bottom-0 bg-neutral-100/10 backdrop-blur absolute min-h-fit">
                <div className="w-full max-w-3xl">
                    <div className="bg-[#1e1f20] rounded-full border border-neutral-700/50 p-2 transition-all duration-500 group flex justify-between items-center z-20"
                        style={{ marginBottom: resultArray.length >= 1 && resultArray[0].status ? "4dvw" : "2dvh" }}>
                        <textarea
                            className="bg-transparent text-neutral-200 outline-none overflow-y-auto font-deskripsi placeholder:text-neutral-500 scrollbar-none w-full px-4
                            disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Tanya database, contoh: 'Siswa yang hampir tidak lulus?'"
                            rows={1} onChange={(e) => handleChange(e)}
                            ref={inputRef} disabled={slug ? false : true}
                        />
                        {slug && (
                            <button type="button" className=' p-3 px-6 text-xl bg-neutral-50 text-neutral-800 rounded-full flex' onClick={() => handleSubmit()}>
                                <span>Kirim</span>
                                <i className="bi bi-send-fill mx-2"></i>
                            </button>
                        )}
                        {!slug && (
                            <button type="button" className=' p-3 px-12 text-xl bg-neutral-50 text-neutral-800 rounded-full whitespace-nowrap' onClick={() => handleSubmit()}>
                                <span>Get Started</span>
                                <i className="bi bi-send-fill mx-2"></i>
                            </button>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ChatInput;
