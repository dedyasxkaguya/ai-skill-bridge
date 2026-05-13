import React from 'react';

const Header = () => {
    return (
        <header className='p-4 flex justify-between items-center text-white h-16 shrink-0'>
            <div className='flex items-center gap-2 px-2'>
                <h1 className='text-xl font-medium font-judul text-neutral-200'>
                    NL2SQL Agent
                </h1>
                <i className="bi bi-caret-down-fill text-xs text-neutral-400 ml-1"></i>
            </div>
            
            <div className='flex items-center gap-4'>
                <button className='bg-neutral-800 hover:bg-neutral-700 text-sm font-medium py-1.5 px-4 rounded-lg transition-colors flex items-center gap-2'>
                    <i className="bi bi-share"></i>
                    <span>Share</span>
                </button>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold cursor-pointer">
                    AD
                </div>
            </div>
        </header>
    );
};

export default Header;