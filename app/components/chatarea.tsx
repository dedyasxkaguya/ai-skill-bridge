import React from 'react';
import MessageBubble from './messagebubble';

const ChatArea = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-8 pb-32 flex flex-col items-center">
            <div className="w-full max-w-4xl flex flex-col gap-2">
                
                <MessageBubble 
                    role="user" 
                    content="Tampilkan 15 pelanggan dengan total pembelian tertinggi tahun ini"
                />

                <MessageBubble 
                    role="ai" 
                    content={
                        <div>
                            Baik, ini query SQL
                            
                            <div className="mt-4 border border-neutral-700/50 rounded-xl overflow-hidden bg-[#1e1f20]">
                                <table className="w-full text-left text-sm text-neutral-300">
                                    <thead className="bg-[#282a2c] text-xs uppercase text-neutral-400 border-b border-neutral-700/50">
                                        <tr>
                                            <th className="px-4 py-3">Nama Pelanggan</th>
                                            <th className="px-4 py-3">Total Pembelian</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-700/50">
                                        <tr className="hover:bg-[#282a2c]/50 transition-colors">
                                            <td className="px-4 py-3">Daddy Hining Seytee Awan</td>
                                            <td className="px-4 py-3 font-mono">Rp 15.000</td>
                                        </tr>
                                        <tr className="hover:bg-[#282a2c]/50 transition-colors">
                                            <td className="px-4 py-3">Siti Syeera Hibayatulloh</td>
                                            <td className="px-4 py-3 font-mono">Rp 12.850.000</td>
                                        </tr>
                                        <tr className="hover:bg-[#282a2c]/50 transition-colors">
                                            <td className="px-4 py-3">Agus Rashad Prakas</td>
                                            <td className="px-4 py-3 font-mono">Rp 10.200.000</td>
                                        </tr>
                                        <tr className="hover:bg-[#282a2c]/50 transition-colors">
                                            <td className="px-4 py-3">Rina Wijaya</td>
                                            <td className="px-4 py-3 font-mono">Rp 8.900.000</td>
                                        </tr>
                                        <tr className="hover:bg-[#282a2c]/50 transition-colors">
                                            <td className="px-4 py-3">Dedi Gunawan</td>
                                            <td className="px-4 py-3 font-mono">Rp 7.550.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    sqlQuery={`SELECT \n  c.customer_name, \n  SUM(o.total_amount) as total_purchases\nFROM customers c\nJOIN orders o ON c.customer_id = o.customer_id\nWHERE YEAR(o.order_date) = YEAR(CURRENT_DATE)\nGROUP BY c.customer_id, c.customer_name\nORDER BY total_purchases DESC\nLIMIT 5;`}
                />

                
                <div className="flex flex-col items-center justify-center mt-32 text-center opacity-0 hidden">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mb-6 flex items-center justify-center shadow-lg">
                        <i className="bi bi-robot text-white text-3xl"></i>
                    </div>
                    <h2 className="text-3xl font-medium font-judul text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">Halo, Adzan</h2>
                    <p className="text-xl text-neutral-400 font-deskripsi">Ada yang bisa saya bantu ?</p>
                </div> 
               

            </div>
        </div>
    );
};

export default ChatArea;
