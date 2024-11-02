import React from "react";
import Image from "next/image";
import Link from "next/link";
import Back from "../Components/BackButton";
import Sidebar from "../Components/Sidebar";

const Pages = () => {
  return (
    <div className="max-w-1920 max-h-1200 relative">
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-cover opacity-50" src={"/active_module.png"} alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-fit" src="/branchbackground.png" alt="logo" width={933} height={612} />
      <div className="flex justify-center flex-col items-center text-5xl">
        <div>
          <Link href={"/Menu"}>
            <Back />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center ml-80 mt-20 z-20">
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
      </div>
      <div className="absolute top-[50%] pl-11" style={{ width: "100%", height: "100%" }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Pages;
