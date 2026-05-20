"use client"

import Link from "next/link";
import { IUser } from "./Check";
import axios from "axios";

interface ISidebar {
    user: IUser
}

const Sidebar = ({ user }: ISidebar) => {

    const handleNewChat = async () => {
        const token = localStorage.getItem("token")
        const res = await axios.post("http://127.0.0.1:8000/api/groupchat", {}, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            }
        })
        const slug = res.data.data.slug
        window.location.href = `/${slug}`
    }

    return (
        <aside className='bg-[#1e1f20] w-72 text-white flex flex-col h-full overflow-hidden shrink-0 transition-all shadow-lg z-100 duration-300'>
            <div className='p-4 flex flex-col gap-2 mb-12'>
                <div className='flex items-center gap-2 px-2'>
                    <i className="bi bi-list text-2xl cursor-pointer hover:bg-neutral-800 px-2 py-1 rounded-full transition-colors"></i>
                    <h1 className='text-white text-2xl font-judul '>Dashboard</h1>
                </div>
                <button
                    onClick={handleNewChat}
                    className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-800 text-sm text-neutral-200 transition-colors mt-2'
                >
                    <i className="bi bi-plus-lg"></i>
                    <span>New Chat</span>
                </button>
            </div>
            <div className='flex-1 overflow-y-auto mt-2 font-deskripsi px-4'>
                <div className=" flex gap-2 justify-start items-center mb-4">
                    <i className="bi bi-clock-history text-xl"></i>
                    <h3 className='text-neutral-200 text-xl font-semibold'>Recent</h3>
                </div>
                <div className='flex flex-col gap-1'>
                    {[...user.group_chats].reverse().map((a) => {
                        if (a.text) {
                            return (
                                <Link href={`/${a.slug}`} className='flex items-center gap-2 hover:bg-neutral-800 cursor-pointer text-sm text-neutral-200 transition-colors truncate'
                                    key={a.id}>
                                    <i className="bi bi-chat-left text-neutral-600"></i>
                                    <span className="truncate text-neutral-400">{a.text}</span>
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>

            <div className='p-4 flex flex-col gap-1 mb-2 font-deskripsi'>
                <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800 cursor-pointer text-sm text-neutral-200 transition-colors mt-2'>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                        {user?.name[0]}{user?.name[1]}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">{user?.name}</span>
                        <span className="text-xs text-neutral-400">{user?.email}</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;