import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className='bg-[#1e1f20] w-72 text-white flex flex-col h-full overflow-hidden shrink-0 transition-all duration-300'>
            <div className='px-4 flex flex-col gap-2'>
                <div className='flex items-center gap-2 px-2'>
                    <i className="bi bi-list text-2xl cursor-pointer hover:bg-neutral-800 p-2 rounded-full transition-colors"></i>
                </div>
                <div>
                    <h1 className='text-white text-3xl font-judul '>Dashboard</h1>
                </div>
                <button className='flex items-center gap-3 bg-[#131314] hover:bg-[#282a2c] text-sm font-medium py-2.5 px-4 rounded-full font-deskripsi w-max duration-300 transition-colors border hover:cursor-pointer active:bg-neutral-600 border-neutral-700/50'>
                    <svg width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                    <span>New Chat</span>
                </button>
            </div>

            <div className='flex-1 overflow-y-auto mt-2 px-4'>
                <h3 className='text-xs font-semibold text-neutral-400 mb-3 px-2'>Recent</h3>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800 cursor-pointer text-sm text-neutral-200 transition-colors truncate'>
                        <i className="bi bi-chat-left text-neutral-400"></i>
                        <span className="truncate">Rencana Menu Makanan...</span>
                    </div>
                    <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800 cursor-pointer text-sm text-neutral-200 transition-colors truncate'>
                        <i className="bi bi-chat-left text-neutral-400"></i>
                        <span className="truncate">Resume software Engineer</span>
                    </div>
                    <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800 cursor-pointer text-sm text-neutral-200 transition-colors truncate'>
                        <i className="bi bi-chat-left text-neutral-400"></i>
                        <span className="truncate">Tips Perjalanan Nigga</span>
                    </div>
                </div>
            </div>

            <div className='p-4 flex flex-col gap-1 mb-2'>
                <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800 cursor-pointer text-sm text-neutral-200 transition-colors'>
                    <i className="bi bi-gem"></i>
                    <span>Gemini Advanced</span>
                </div>
                <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800 cursor-pointer text-sm text-neutral-200 transition-colors'>
                    <i className="bi bi-question-circle"></i>
                    <span>Help</span>
                </div>
                <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800 cursor-pointer text-sm text-neutral-200 transition-colors mt-2'>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                        AD
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Tim Kita</span>
                        <span className="text-xs text-neutral-400">Designer</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;