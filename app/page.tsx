import Sidebar from "./components/sidebar";
import Header from "./components/header";
import ChatArea from "./components/chatarea";
import ChatInput from "./components/chatinput";

export default function Home() {
  return (
    <main className="flex flex-row h-screen bg-[#131314] overflow-hidden selection:bg-blue-500/60 selection:text-white">
      <Sidebar />
      <section className="flex-1 flex flex-col relative h-full bg-[#131314]">
        <Header />
        <div className="flex-1 flex flex-col relative h-full">
          {/* <ChatArea /> */}
          <ChatInput />
        </div>
      </section>
    </main>
  );
}