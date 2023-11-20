import Chat from "@/components/common/chat";
import Chats from "@/components/common/chats";
import Nvabbar from "@/components/common/navbar";

const Page = () => {
  return (
    <>
      <Nvabbar />
      <div className="w-full h-[calc(100vh-77px)] flex justify-start items-start">
        <Chats />
        <Chat />
      </div>
    </>
  );
};
export default Page;
