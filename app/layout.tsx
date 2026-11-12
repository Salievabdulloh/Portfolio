import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}
