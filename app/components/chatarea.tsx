
import React from 'react';
import MessageBubble from './messagebubble';
import { Result } from './chatinput';
import { IUser } from './Check';

interface IChat {
    arrayResult: IChartArea[]
    user: IUser
    slug?: string
}

export interface IChartArea {
    query: string
    data: Result[]
    response: string
    question: string
    status: boolean
    chat?:string
}



const ChatArea = ({ arrayResult, user, slug }: IChat) => {
    return (
        <div className="flex-1 overflow-y-auto pt-8 flex flex-col items-center pb-[32dvh]">
            {arrayResult.length < 1 && (
                <section className=' text-neutral-400 h-full flex items-center'>
                    <p>Halo, selamat datang <span className=' text-neutral-200 font-semibold '>{user?.name}</span></p>
                </section>
            )}
            {arrayResult.length >= 1 && arrayResult.map((a, index) => {
                if (a.status) {

                    return (

                        <div className="w-full max-w-4xl flex flex-col gap-2" key={index}>
                            <MessageBubble
                                role="user"
                                content={a.question || a.chat}
                                sqlQuery={false}
                                response={false}
                            />

                            <MessageBubble
                                role="ai"
                                content={
                                    <main>
                                        <p>Baik, ini query SQL kamu</p>
                                        <div className="mt-4 border border-neutral-700/50 rounded-xl overflow-hidden bg-[#1e1f20]">
                                            <table className="w-full text-left text-sm text-neutral-300">
                                                <thead className="bg-[#282a2c] text-xs uppercase text-neutral-400 border-b border-neutral-700/50">
                                                    <tr>
                                                        <th className="px-4 py-3">Nama Murid</th>
                                                        <th className="px-4 py-3">Gender</th>
                                                        <th className="px-4 py-3">Umur</th>
                                                        <th className="px-4 py-3">Jam Belajar</th>
                                                        <th className="px-4 py-3">Jam Tidur</th>
                                                        <th className="px-4 py-3">Skor Final</th>
                                                        <th className="px-4 py-3">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-neutral-700/50">
                                         {a.data && a.data.map((item, idx) => {
    return (
        <tr className="hover:bg-[#282a2c]/50 transition-colors" key={idx}>
            <th className="px-4 py-3">{item.student_id}</th>
            <th className="px-4 py-3">{item.gender}</th>
            <th className="px-4 py-3">{item.age}</th>
            <th className="px-4 py-3">{item.study_hours}</th>
            <th className="px-4 py-3">{item.sleep_hours}</th>
            <th className="px-4 py-3">{item.final_score}</th>
            <th className="px-4 py-3">{item.passed ? "lulus" : "tidak lulus"}</th>
        </tr>
    )
})}
                                                </tbody>
                                            </table>
                                        </div>
                                    </main>
                                }
                                sqlQuery={a.query}
                                response={a.response}
                            />
                        </div>
                    )
                } else {
                    return (
                        <div className="flex-1 pt-8 flex flex-col items-center" key={index}>
                            <div className="w-4xl flex justify-center gap-2">
                                <MessageBubble role='ai'
                                    content={
                                        <>
                                            <p>Ai Sedang Berpikir...</p>
                                        </>
                                    }
                                    sqlQuery={false} response={false}
                                />
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default ChatArea;
