import React from 'react';

const ChatInput = () => {
    return (
        <div className="w-full flex justify-center pb-6 px-4 bg-gradient-to-t from-[#000000] via-[#131314] to-transparent absolute bottom-0">
            <div className="w-full max-w-3xl mb-12 scale-90">
                <div className="bg-[#1e1f20] rounded-full border border-neutral-700/50 p-2 flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.1)] focus-within:bg-[#282a2c] focus-within:shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 group">
                    <div className="flex items-end gap-2 px-2">
                        <button className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors flex shrink-0 mb-0.5">
                            <i className="bi bi-plus-circle text-xl"></i>
                        </button>
                        
                        <textarea 
                            className="flex-1 bg-transparent text-neutral-200 text-base resize-none outline-none py-3.5 px-2 max-h-48 overflow-y-auto font-deskripsi placeholder:text-neutral-500" 
                            placeholder="Tanya database, contoh: 'Siapa nama pelanggan dengan id 10?'"
                            rows={1}
                        />
                        <div className="flex gap-1 mb-0.5 shrink-0">
                            <button className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors flex">
                                <i className="bi bi-mic text-xl"></i>
                            </button>
                            <button className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors flex">
                                <i className="bi bi-send text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-3 text-xs text-neutral-500 font-deskripsi px-4">
                    NL2SQL Agent bisa ngebuat kesalahan, hati hati
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
