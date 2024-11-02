import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Components/Sidebar";

const Menu = () => {
  return (
    <div className="max-w-1920 max-h-1200 relative">
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-cover opacity-50" src={"/menu.png"} alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-fit" src="/menubackground.png" alt="logo" width={933} height={612} />
      <div className="z-10 relative flex flex-row justify-around">
        <div className="absolute mb-96 ml-72" style={{ top: 45, left: 120 }}>
          <Link href="/Branch-Selected">
            <Image src="/branches.png" alt="branche-button" width={453} height={261} />
          </Link>
        </div>
        <div className="absolute ml-72 mt-20" style={{ top: 230, left: 130 }}>
          <Link href="/active-module">
            <Image src="/modules.png" alt="module-button" width={462} height={266} />
          </Link>
        </div>
      </div>
      <div className="absolute pt-56 pl-11" style={{ width: "100%", height: "100%" }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Menu;
