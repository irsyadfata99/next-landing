import React from "react";
import Image from "next/image";
import Card from "../Components/Card";

const Pages = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image className="absolute top-0 left-0" src="/Background-Decor.png" alt="logo" width={933} height={612} />

      <div className="flex justify-center flex-col items-center mt-24 text-5xl">
        <h1 className="text-black mt-24">Why Koding Next?</h1>

        {/*Grid Atazz  */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Card text="Get to know our modules!" />
          <Card text="Billingual Instrction" />
          <Card text="Trusted Partner of Top Schools" />
        </div>

        {/* Grid Bawahh */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <Card text="Industry-Recognized Certification" />
          <Card text="Dedicated Full-Time Teachers" />
        </div>
      </div>
    </div>
  );
};

export default Pages;
