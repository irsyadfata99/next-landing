import React from "react";
import Image from "next/image";

const Pages = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image className="absolute top-0 left-0" src="/Background-Decor.png" alt="logo" width={933} height={612} />
    </div>
  );
};

export default Pages;
