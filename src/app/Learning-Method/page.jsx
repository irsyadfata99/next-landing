import React from "react";
import Image from "next/image";
import Card from "../Components/Card";

const Pages = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image className="absolute top-0 left-0" src="/Background-Decor.png" alt="logo" width={933} height={612} />

      <div className="flex justify-center flex-col items-center mt-24 text-5xl">
        <h1 className="text-black mt-24">Learning Methods</h1>

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
