import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";
import Me from "/public/joe.jpg";
import At from "/public/at.png";

export default function Home() {
  return (
    <div>
      {/* <div className="relative flex flcol p-20 w-full h-screen bg-[#D7D7D7]">
        
        <div className="relative z-100 ">
          <h1 className="text-[green] text-5xl font-bold">
            Hi, I am Saliev Abdulloh
          </h1>
          <h1 className="text-[green] text-5xl font-bold">
            Hi, I am sssssssssssssssssssssssssss
          </h1>
        </div>
        <div className="absolute right-0 top-0 h-full w-[60%] bg-black"
            style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        ></div>
      </div> */}
      <div className="flex items-center">
        <div className="bg-[#D7D7D7] w-full h-screen flex justify-center flex-col items-center">
          <div className="">
            <h1 className="text-[30px] font-bold">Hi, i am</h1>
            <h1 className="text-[60px] mt-5 font-bold">Saliev Abdulloh</h1>
            <h1 className="text-[30px] mb-10 text-[#909090] font-bold">
              Front-end Developer
            </h1>
            <div className="flex items-center gap-8">
              <div className="p-3 shadow-2xl rounded-sm bg-[#C4C4C4]">
                <Image src={At} alt="at logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-full h-screen"></div>
      </div>
    </div>
  );
}
