import React from "react";
import Image from "next/image";
import Listt from "..Components/Route";

const Pages = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image className="absolute top-0 left-0" src="/menubackground.png" alt="logo" width={933} height={612} />
      <div>
        <Listt />
      </div>
    </div>
  );
};

export default Pages;
