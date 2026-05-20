'use client'

import axios from "axios"
import { useRef } from "react"
import Link from "next/link"

const Page = () => {

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        if (nameRef.current && emailRef.current && passwordRef.current) {
            axios.post("http://127.0.0.1:8000/api/register", {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }
            })
            .then(data => {
                const fetched = data.data
                localStorage.setItem("token", fetched.data.token)
                window.location.href = "/"
            })
            .catch(err => {
                console.log(err.response?.data)
            })
        }
    }

    return (
        <main className="bg-[#131314] overflow-hidden selection:bg-blue-500/60 selection:text-white h-dvh flex justify-center items-center">
            <form action="" className="text-neutral-100 p-8 rounded-2xl shadow bg-[#1e1f20] shadow-neutral-800 w-full max-w-sm">
                <div className="pb-8">
                    <p className="text-2xl font-semibold">Daftar Akun</p>
                    <p className="font-light text-neutral-400">Buat akun baru untuk memulai</p>
                </div>
                <section className="flex flex-col gap-4">
                    <label className="flex flex-col gap-2">
                        <span className="text-sm text-neutral-400">Nama</span>
                        <input
                            type="text"
                            suppressHydrationWarning
                            className="p-2 px-4 rounded-xl outline-0 bg-neutral-800 w-full"
                            placeholder="Masukkan nama lengkap"
                            ref={nameRef}
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm text-neutral-400">Email</span>
                        <input
                            type="email"
                            suppressHydrationWarning
                            className="p-2 px-4 rounded-xl outline-0 bg-neutral-800 w-full"
                            placeholder="Masukkan email"
                            ref={emailRef}
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span className="text-sm text-neutral-400">Password</span>
                        <input
                            type="password"
                            suppressHydrationWarning
                            className="p-2 px-4 rounded-xl outline-0 bg-neutral-800 w-full"
                            placeholder="Minimal 6 karakter"
                            ref={passwordRef}
                        />
                    </label>
                    <button
                        type="button"
                        suppressHydrationWarning
                        className="mt-4 p-3 px-6 rounded-xl bg-neutral-100 text-neutral-800 w-full transition-all duration-500 shadow shadow-neutral-100 hover:shadow-lg"
                        onClick={handleSubmit}
                    >
                        Daftar Sekarang
                    </button>
                    <p className="text-center text-sm text-neutral-400 mt-2">
                        Sudah punya akun?{" "}
                        <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Login di sini
                        </Link>
                    </p>
                </section>
            </form>
        </main>
    )
}

export default Page