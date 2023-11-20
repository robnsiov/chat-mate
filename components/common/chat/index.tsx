import { IoSend, IoFileTrayStacked } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import cls from "classnames";
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from "react-icons/io5";

const Chat = () => {
  return (
    <>
      <div className="w-full h-full bg-slate-200 flex justify-between items-start flex-col">
        <div className="w-full flex h-[calc(100%-72px)] justify-start items-start flex-col">
          <div className="w-full flex justify-between items-center bg-slate-100 p-3">
            <div className="flex justify-start items-start flex-col">
              <span className="text-sm font-semibold text-slate-600">
                Jack seem
              </span>
              <span className="text-[12px] text-slate-400 mt-1">
                Last seen recently
              </span>
            </div>
            <div
              className="hover:bg-slate-300 w-[38px] aspect-square rounded-full
               bg-slate-200 flex justify-center items-center transition-all duration-200 cursor-pointer 
               text-xl"
            >
              <BsThreeDots />
            </div>
          </div>

          <div
            className="w-full h-[calc(100%-66px)] flex justify-start items-start flex-col p-3 space-y-2 
          overflow-y-auto"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={cls(
                  "w-full flex items-center",
                  i % 2 === 0 ? "justify-start" : "justify-end"
                )}
              >
                <div className="w-[250px] bg-slate-100 rounded-md p-2">
                  <p className="text-slate-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <div className="w-full flex justify-end items-center text-xs mt-1 text-slate-400">
                    <span>10:27 AM</span>
                    <span className="text-blue-500 text-lg ml-2">
                      <IoCheckmarkDoneOutline />
                      {/* <IoCheckmarkOutline /> */}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-slate-100 flex justify-star items-start p-2">
          <div className="w-full flex justify-start items-start bg-white rounded-lg p-2">
            <textarea
              className="w-full bg-white resize-none p-2 focus:ring-2 focus:ring-blue-300
            outline-none rounded-md mr-3 placeholder:text-sm duration-200 transition-all"
              placeholder="type something ..."
              rows={1}
            />
            <div className="flex justify-start items-center text-xl text-slate-600">
              <div
                className="hover:bg-slate-300 w-[38px] aspect-square rounded-full
               bg-slate-200 flex justify-center items-center transition-all duration-200 cursor-pointer mr-2"
              >
                <IoFileTrayStacked />
              </div>
              <div
                className="hover:bg-slate-300 w-[38px] aspect-square rounded-full
               bg-slate-200 flex justify-center items-center transition-all duration-200 cursor-pointer mr-2"
              >
                <FaMicrophone />
              </div>
              <div
                className="hover:bg-slate-300 w-[38px] aspect-square rounded-full
               bg-slate-200 flex justify-center items-center transition-all duration-200 cursor-pointer"
              >
                <IoSend />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
