"use client";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import Logo from "/public/logo.png";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const route = useRouter();
  return (
    <html lang="en">
      <body>
        <header className="fixed w-full px-20 py-10 z-10 text-[white] flex bg-transparent items-center justify-between">
          <Link href="/">
            <Image src={Logo} alt="Logo image" width={60} height={50} />
          </Link>
          <ul className="flex items-center md:mr-20 font-semibold gap-[30px]">
            <Link href="/about">About me</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/portfolio">Portfolio</Link>
            <button
              onClick={() => route.push("contact")}
              className="py-3 px-5 bg-white cursor-pointer rounded-full font-medium text-black"
            >
              CONTACT ME
            </button>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}

// git pull origin master --no-edit