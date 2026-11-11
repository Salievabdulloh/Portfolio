import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen bg-[#D7D7D7]">
        <div className="relative flex items-center flex-col z-100 p-20">
          <h1 className="text-black text-5xl font-bold">Hi, I am</h1>
        </div>
        <div
          className="absolute right-0 top-0 h-full w-[60%] bg-black"
          style={{ clipPath: "polygon(1 5% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </div>
    </div>
  );
}
