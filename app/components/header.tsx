import React from 'react';

const Header = () => {
    return (
        <header className='p-4 flex justify-between items-center text-white h-16 shrink-0 bg-[#1e1f20]'>
            <div className='flex items-center gap-2 px-2'>
                <h1 className='text-xl font-medium font-judul text-neutral-200'>
                    NL2SQL Agent
                </h1>
                <i className="bi bi-caret-down-fill text-xs text-neutral-400 ml-1"></i>
            </div>
            
            <div className='flex items-center gap-4 font-deskripsi'>
                <button className='outline-red-500 hover:bg-red-500 text-sm font-medium hover:text-white py-1.5 px-4 rounded-lg flex items-center active:bg-red-400 active:scale-105 hover:cursor-pointer duration-300 transition-all text-red-500'>
                    <i className="bi bi-share"></i>
                    Hapus Chat
                </button>
                <button className='bg-neutral-800  hover:bg-neutral-700 text-sm font-medium hover:text-white py-1.5 px-4 rounded-lg flex items-center active:bg-neutral-500 active:scale-105 hover:cursor-pointer duration-300 transition-all '>
                    <i className="bi bi-share"></i>
                    <p>Share</p>
                </button>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold cursor-pointer">
                    AD
                </div>
            </div>
        </header>
    );
};

export default Header;