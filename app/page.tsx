import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";
import Me from "/public/jo.png";
import At from "/public/at.png";
import Git from "/public/git.png";
import LK from "/public/In.png";
import ITB from "/public/Logo ITB.png";

export default function Home() {
  return (
    <div>
      <section className="flex items-center">
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
        <div className="bg-black flex items-end w-full h-screen">
          <Image
            src={Me}
            alt="This is joe biden image"
            width={550}
            height={550}
          />
        </div>
      </section>
      <section className="bg-[#1D1D1D] px-20 py-7 relative text-[white]">
        <div className="absolute right-0 top-0 bottom-0">
          <Image src={ITB} alt="This is Logo of ITB" />
        </div>
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-[29px] font-bold ">IT BERRIES</h1>
          <h3>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac <br /> est. Morbi commodo, eros
            in dignissim tempus, lacus odio rutrum augue, in semper sem magna
            quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet{" "}
            <br />
            elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque
            laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae
            elementum tempor, accumsan nec <br /> eros.
          </h3>
          <button className="border-x-2 border-y-2 border-x-white border-y-transparent hover:border-y-white font-semibold px-6 py-3 cursor-pointer transition-all duration-300">
            READ MORE
          </button>
        </div>
      </section>
      <section className="z-10 flex items-center flex-col px-20 py-7 bg-[#fafafa] relative">
        <div className="flex items-center flex-col gap-10">
          <button className="border-8 px-10 font-bold text-2xl py-5">
            ABOUT ME
          </button>
          <h3 className="text-center">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem <br /> sed viverra. In vel
            urna quis libero viverra facilisis ut ac est.
          </h3>
        </div>
      </section>
    </div>
  );
}
