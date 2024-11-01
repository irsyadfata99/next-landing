import React from "react";
import Image from "next/image";
import Sidebar from "../Components/Sidebar";

const Menu = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image className="absolute top-0 left-0" src="/menubackground.png" alt="logo" width={933} height={612}/>
      <div className="z-10 relative pt-60 flex flex-row justify-around">page
          <div className="absolute mb-96" width="auto" height="auto" style={{ top: 20, left: 70 }}>
            <Image className="mb-44 ml-72" src="/branches.png" alt="logo" width={500} height={3600}/>
          </div>
          <div className="absolute mb-96" width="auto" height="auto" style={{ top: 200, left: 150 }}>
            <Image className="mb-44 ml-72" src="/modules.png" alt="logo" width={500} height={3600}/>
          </div>
        <div className="absolute mr-96 pr-96">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Menu;
