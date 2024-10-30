import React from "react";
import Image from "next/image";

const Pages = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image className="absolute top-0 left-0" src="/branchbackground.png" alt="logo" width={20000} height={3600} />
    </div>
  );
};

export default Pages;
