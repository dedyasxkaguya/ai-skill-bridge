import { useEffect, useState } from 'react';
import { IUser } from './Check';
import axios from 'axios';
import { GroupChatData, IGroupChat } from '../[slug]/groupchat';

interface IHeader {
    user: IUser
    slug?: string
}

const Header = ({ user, slug }: IHeader) => {
    const [data, setData] = useState<GroupChatData>()
    useEffect(() => {
        const token = typeof window ? localStorage.getItem("token") : null
        if (slug) {
            axios.get<IGroupChat>(`http://127.0.0.1:8000/api/groupchat/${slug}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'Application/json'
                }
            })
                .then(data => {
                    const fetched = data.data
                    setData(fetched.data)
                })
        }
    },[slug])
    return (
        <header className='p-4 flex justify-between items-center text-white h-16 shrink-0 bg-[#1e1f20]'>
            <div className='flex items-center gap-2 px-2'>
                <h1 className='text-xl font-medium font-judul text-neutral-200'>
                    <span>NL2SQL Agent</span>
                    <i className="bi bi-caret-down-fill text-xs text-neutral-400 me-2"></i>
                </h1>
            </div>
            <p className='font-medium font-judul text-neutral-200'>
                {data?.text}
            </p>

            <div className='flex items-center gap-4 font-deskripsi'>
                {/* <button className='outline-red-500 hover:bg-red-500 text-sm font-medium hover:text-white py-1.5 px-4 rounded-lg flex items-center active:bg-red-400 active:scale-105 hover:cursor-pointer duration-300 transition-all text-red-500'>
                    <i className="bi bi-share"></i>
                    Hapus Chat
                </button> */}
                <button className='bg-neutral-800  hover:bg-neutral-700 text-sm font-medium hover:text-white py-1.5 px-4 rounded-lg flex items-center active:bg-neutral-500 active:scale-105 hover:cursor-pointer duration-300 transition-all '>
                    <p>Share</p>
                    <i className="bi bi-share mx-2"></i>
                </button>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold cursor-pointer uppercase">
                    {user?.name[0]}{user?.name[1]}
                </div>
            </div>
        </header>
    );
};

export default Header;