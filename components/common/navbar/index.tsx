import Image from "next/image";

const Nvabbar = () => {
  return (
    <>
      <div className="w-full bg-white py-4 px-8 flex justify-between items-center">
        <div className="w-[70px]">
          <Image src={"/images/logo.png"} alt="logo" width="200" height="100" />
        </div>
        <div className="w-[45px] aspect-square rounded-full overflow-hidden relative">
          <Image
            src={"/images/profile.jpg"}
            alt="logo"
            width="200"
            height="100"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-slate-700 opacity-30"></span>
        </div>
      </div>
    </>
  );
};
export default Nvabbar;
