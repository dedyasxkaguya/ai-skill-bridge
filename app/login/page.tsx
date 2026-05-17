'use client'

import axios from "axios"
import { useRef } from "react"

const Page = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        if (emailRef.current && passwordRef.current) {
            const formdata = new FormData()
            formdata.append("email", emailRef.current.value as string)
            formdata.append("password", passwordRef.current.value as string)
            axios.post("http://127.0.0.1:8000/api/login", formdata)
                .then(data => {
                    const fetched = data.data
                    console.log(fetched)
                    localStorage.setItem("token", fetched.data.token)
                })
        }
    }

    return (
        <main className=" bg-[#131314] overflow-hidden selection:bg-blue-500/60 selection:text-white h-[100dvh] flex justify-center items-center">
            <form action="" className=" text-neutral-100 p-4 rounded-2xl shadow bg-[#1e1f20] shadow-neutral-800">
                <div className=" pb-8">
                    <p className=" text-2xl font-semibold">Halo,</p>
                    <p className=" font-light text-neutral-400">Selamat datang di </p>
                </div>
                <section className=" flex flex-col gap-4 justify-center items-center">
                    {/* <label htmlFor="" className=" flex flex-col gap-2">
                        <input type="text" className="p-2 px-4 rounded-xl outline-0 bg-neutral-800 min-w-[16dvw]"
                            placeholder="Masukkan Nama" />
                    </label> */}
                    <label htmlFor="" className=" flex flex-col gap-2">
                        <input type="email" className="p-2 px-4 rounded-xl outline-0 bg-neutral-800 min-w-[16dvw]"
                            placeholder="Email" ref={emailRef} />
                    </label>
                    <label htmlFor="" className=" flex flex-col gap-2">
                        <input type="password" className="p-2 px-4 rounded-xl outline-0 bg-neutral-800 min-w-[16dvw]"
                            placeholder="Password" ref={passwordRef} />
                    </label>
                    <label htmlFor="" className=" flex flex-col gap-2 pt-4">
                        <button type="button" className=" p-3 px-6 rounded-xl bg-neutral-100 text-neutral-800 min-w-[16dvw] transition-all duration-500 shadow shadow-neutral-100 
                        hover:shadow-lg" onClick={()=>handleSubmit()}>
                            Login Now
                        </button>
                    </label>
                </section>
            </form>
        </main>
    )
}

export default Page