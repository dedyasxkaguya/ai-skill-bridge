"use client"

import Sidebar from "./components/sidebar";
import Header from "./components/header";
import ChatInput from "./components/chatinput";
import Check, { IUser } from "./components/Check";
import { useState } from "react";

export default function Page() {

  const nullUser:IUser = {
    created_at:new Date(),
    email:"unverified_email",
    id:404,
    name:"unverified_username",
    email_verified_at:null,
    updated_at:new Date(),
    group_chats:[]
  }

  const [user,setUser] = useState<IUser>(nullUser)
  const handleUser = (data:IUser) => {
    setUser(data)
  }

  return (
    <main className="flex flex-row h-screen bg-[#131314] overflow-hidden selection:bg-blue-500/60 selection:text-white">
      <Sidebar user={user}/>
      <section className="flex-1 flex flex-col relative h-full bg-[#131314]">
        <Header user={user}/>
        <div className="flex-1 flex flex-col relative h-full">
          <ChatInput user={user}/>
          <Check func={handleUser}/>
        </div>
      </section>
    </main>
  );
}