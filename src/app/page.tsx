import "./globals.css";
import Button from "./Components/Button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen relative">
      <video src="/Looping-Transisi.mov" autoPlay muted preload="metadata" loop className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"></video>
      <Image className="absolute top-0 left-0" src="/homebackground.png" alt="logo" width={933} height={612} />
      <div className="relative z-10 flex flex-row pt-44">
        <div className="text-black basis-1/4 pt-24 pl-52 flex flex-row">
          <div>
            <h1 className="w-44">Koding Next</h1>
            <p>Bandung & BSD</p>
          </div>
          {/* Will look the alternative, but in the meantime just do like this */}
          <Image src="/logo.png" alt="logo" className="logo-image" width={200} height={100} />
        </div>
        <Link href={"/Menu"}>
          <Button />
        </Link>
      </div>
      <Link href={"/WhyChooseUs"}>
        <Image className="absolute bottom-5 right-5" src="/Why-Button.png" alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
}
