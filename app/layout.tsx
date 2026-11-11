import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import Logo from "/public/logo.png";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header className="fixed flex items-center w-full justify-between top-10 z-10 right-10 left-10">
          <Image src={Logo} alt="Logo image" width={60} height={50} />
          <ul className="flex text-[white] pl-200 items-center gap-[30px]">
            <Link href="/about">About me</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/portfolio">Portfolio</Link>
            <button>CONTACT ME</button>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
