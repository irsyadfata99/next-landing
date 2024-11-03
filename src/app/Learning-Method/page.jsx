import React from "react";
import Image from "next/image";
import Card from "../Components/Card";
import Link from "next/link";
import Back from "../Components/BackButton";

const Pages = () => {
  return (
    <div className="max-w-1920 max-h-1200 relative">
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-cover opacity-50" src={"/Learning-method.png"} alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-fit" src="/Background-Decor.png" alt="logo" width={933} height={612} />

      <div className="flex justify-center flex-col items-center text-5xl">
        <div>
          <Link href={"/active-module"}>
            <Back />
          </Link>
        </div>
        <h1 className="text-black mt-24 z-10">Learning Methods</h1>

        {/*Grid Atazz  */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Card text="Project-Based Learning" />
          <Card text="Structured Problem-Solving" />
        </div>

        {/* Grid Bawahh */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <Card text="Code Analysis & Optimization" />
          <Card text="Introduction to Comp-Sci Projects" />
        </div>
      </div>
    </div>
  );
};

export default Pages;
