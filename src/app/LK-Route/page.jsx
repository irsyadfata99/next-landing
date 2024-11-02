import React from "react";
import Image from "next/image";
import Link from "next/link";
import Back from "../Components/BackButton";
import Sidebar from "../Components/Sidebar";

const Pages = () => {
  return (
    <div className="max-w-1920 max-h-1200 relative">
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-cover opacity-50" src={"/LK_route_selection.png"} alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-fit" src="/branchbackground.png" alt="logo" width={933} height={612} />
      <div className="text-black flex flex-col text-center justify-center">
        <div>
          <Link href={"/active-module"}>
            <Back />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center ml-80 mt-32 z-10">
          <div className="flex">
            <Image src="/lk-title.png" alt="jk-title" width={246} height={78} />
          </div>
          <div className="flex justify-between">
            <Link href={"/LK-Age-1"}>
              <Image src="/lk-46-button.png" alt="jk-812-button" width={277} height={277} />
            </Link>
            <Link href={"/LK-Age-2"}>
              <Image src="/lk-78-button.png" alt="jk-1216-button" width={277} height={277} />
            </Link>
          </div>
        </div>
        <div className="absolute pt-56 pl-11" style={{ width: "100%", height: "100%" }}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Pages;
