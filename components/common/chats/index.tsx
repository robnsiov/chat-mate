import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from "react-icons/io5";

const Chats = () => {
  return (
    <>
      <div className="min-w-[400px] h-full overflow-auto flex justify-start items-start flex-col bg-slate-100">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-full flex justify-between items-center pl-8 pr-3 py-3
        hover:bg-slate-200 transition-all duration-200 cursor-pointer 
        border-b-[1px] border-slate-200 last:border-0"
          >
            <div className="flex justify-start items-center">
              <div className="min-w-[40px] aspect-square rounded-full bg-blue-300 flex justify-center items-center">
                <span className="uppercase text-slate-100 text-xs">AL</span>
              </div>
              <div className="flex justify-start items-start flex-col text-sm ml-2 text-slate-700">
                <span className="font-medium">Sam Reeks</span>
                <p className="opacity-70 text-xs mt-1 w-[200px] truncate">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  obcaecati sapiente accusamus molestiae ut, possimus
                  exercitationem omnis quis{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end flex-col">
              <span className="text-slate-500 font-semibold text-[11px]">
                10:29 AM
              </span>
              <div className="text-sm text-slate-700 mt-1">
                {/* <IoCheckmarkOutline /> */}
                <IoCheckmarkDoneOutline />
                {/* <span className="bg-slate-700 text-white text-[11px] rounded-full px-1.5 py-0.5">
                15
              </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Chats;
