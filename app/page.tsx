import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";
import Me from "/public/joe.jpg";
import At from "/public/at.png";
import Git from "/public/git.png";
import LK from "/public/In.png";

export default function Home() {
  return (
    <div>
      <div className="flex items-center">
        <div className="bg-[#D7D7D7] w-full h-screen flex justify-center flex-col items-center">
          <div className="">
            <h1 className="text-[30px] font-bold">Hi, i am</h1>
            <h1 className="text-[60px] mt-5 font-bold">Saliev Abdulloh</h1>
            <h1 className="text-[30px] mb-10 text-[#909090] font-bold">
              Front-end Developer
            </h1>
            <div className="flex items-center gap-8">
              <div className="shadow-[0px_5px_10px_-6px] p-3 rounded-sm bg-[#C4C4C4]">
                <Image src={At} alt="at logo" />
              </div>
              <div className="shadow-[0px_5px_10px_-6px] p-3 rounded-sm bg-[#C4C4C4]">
                <Image src={Git} alt="github logo" />
              </div>
              <div className="shadow-[0px_5px_10px_-6px] p-3 rounded-sm bg-[#C4C4C4]">
                <Image src={LK} alt="LinkedIn logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-full h-screen"></div>
      </div>
    </div>
  );
}
