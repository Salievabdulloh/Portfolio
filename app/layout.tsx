import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import Logo from "/public/logo.png";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="fixed w-full z-10 text-[white] p-5 flex bg-transparent items-center justify-between">
          <Link href="/">
            <Image src={Logo} alt="Logo image" width={60} height={50} />
          </Link>
          <ul className="flex items-center font-semibold rounded-2xl gap-[30px]">
            <Link href="/about">About me</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/portfolio">Portfolio</Link>
            <button className="py-3 px-5 bg-white radius text-black">
              CONTACT ME
            </button>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
