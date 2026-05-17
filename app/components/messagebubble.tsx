import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'

export interface IMessage {
    role: 'user' | 'ai'
    content: React.ReactNode
    sqlQuery: string | boolean
    response: string | boolean
}

const MessageBubble = ({ role, content, sqlQuery, response }: IMessage) => {
    if (role === 'user') {
        return (
            <div className="flex justify-end w-full mb-6 px-4">
                <div className="bg-[#282a2c] text-neutral-100 max-w-[70%] rounded-3xl px-5 py-3 text-[15px] leading-relaxed">
                    {content}
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-start w-full mb-8 px-4">
            <div className="flex gap-4 w-full max-w-3xl">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <i className="bi bi-robot text-white text-sm"></i>
                </div>

                <div className="flex flex-col gap-3 w-full justify-center">
                    <div className="text-neutral-200 text-[15px] leading-relaxed font-deskripsi">
                        {content}
                    </div>

                    {sqlQuery && (
                        <div className="mt-2 bg-[#1e1f20] rounded-xl border border-neutral-700/50 overflow-hidden">
                            <div className="flex justify-between items-center px-4 py-2 bg-[#282a2c] border-b border-neutral-700/50">
                                <span className="text-xs text-neutral-400 font-mono">SQL</span>
                                <button className="text-neutral-400 hover:text-white transition-colors text-xs flex items-center gap-1">
                                    <i className="bi bi-clipboard"></i> Copy
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto text-sm text-blue-300 font-mono whitespace-pre-wrap">
                                {sqlQuery}
                            </div>
                        </div>
                    )}
                    {response && (
                        <section>
                            <div className="text-neutral-200 text-[15px] leading-relaxed font-deskripsi">
                                {response.toString()}
                            </div>
                            <div className="flex gap-2 mt-2">
                                <button className="text-neutral-500 hover:text-neutral-300 transition-colors p-1 rounded-md hover:bg-neutral-800">
                                    <i className="bi bi-hand-thumbs-up"></i>
                                </button>
                                <button className="text-neutral-500 hover:text-neutral-300 transition-colors p-1 rounded-md hover:bg-neutral-800">
                                    <i className="bi bi-hand-thumbs-down"></i>
                                </button>
                                <button className="text-neutral-500 hover:text-neutral-300 transition-colors p-1 rounded-md hover:bg-neutral-800">
                                    <i className="bi bi-arrow-clockwise"></i>
                                </button>
                                <button className="text-neutral-500 hover:text-neutral-300 transition-colors p-1 rounded-md hover:bg-neutral-800">
                                    <i className="bi bi-three-dots-vertical"></i>
                                </button>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageBubble;
