import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";

export default function Home() {
  return (
    <div>
      <div className="relative flex flcol p-20 w-full h-screen bg-[#D7D7D7]">
        <header className="flex items-center w-full justify-between">
          <Image src={Logo} alt="Logo image" width={60} height={50} />
          <ul className="flex text-[white] z-20 pl-200 items-center gap-[30px]">
            <Link href="/about">About me</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/portfolio">Portfolio</Link>
            <button>CONTACT ME</button>
          </ul>
        </header>
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
      </div>
    </div>
  );
}
