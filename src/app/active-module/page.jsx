import React from "react";
import Image from "next/image";
import Link from "next/link";
import Back from "../Components/BackButton";
import Sidebar from "../Components/Sidebar";

const Pages = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image className="absolute top-0 left-0 object-cover opacity-60" src={"/active_module.png"} alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0" src="/branchbackground.png" alt="logo" width={933} height={612} />
      <div className="absolute text-black flex flex-col text-center justify-center">
        <div>
          <Link href={"/Menu"}>
            <Back />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center ml-80 mt-20">

          <div className="flex justify-between">
            <Link href={"/JK-Route"}>
              <Image src="/jk-button.png" alt="jk-button" width={319} height={319} />
            </Link>
            <Link href={"/LK-Route"}>
              <Image src="/lk-button.png" alt="lk-button" width={319} height={319} />
            </Link>
          </div>

          <div className="absolute mt-80">
            <Link href={"/Learning-Method"}>
              <Image src="/method-button.png" alt="method-button" width={195} height={195} />
            </Link>
          </div>
        </div>
        <div className="absolute ml-20 pr-96 mt-24">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Pages;
