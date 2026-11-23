"use client";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "/public/logo.png";
import Top from "/public/Top.svg";
import Instagram from "/public/instagram.svg";
import LinkedIn from "/public/LinkedIn.svg";
import Gmail from "/public/gmail.svg";
import Facebook from "/public/facebook.svg";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const route = useRouter();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <html lang="en">
      <body>
        <header className="fixed w-full px-20 py-10 z-10 bg-transparent text-[white] flex items-center justify-between">
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
        <footer className="bg-[#1A1A1A] py-[50px] gap-5 text-[white] flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="flex cursor-pointer items-center flex-col gap-3"
          >
            <Image src={Top} alt="back to top icon" />
            <h3>BACK TO TOP</h3>
          </button>
          <div className="flex items-center gap-5 ">
            <Image src={Facebook} alt="this is facebook icon" />
            <Image src={LinkedIn} alt="this is LinkedIn icon" />
            <Image src={Instagram} alt="this is instagram icon" />
            <Image src={Gmail} alt="this is gmail icon" />
          </div>
          <h3>@2026 Saliev Abdulloh All Rights Reserved.</h3>
        </footer>
      </body>
    </html>
  );
}
