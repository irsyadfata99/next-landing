import React from "react";
import Image from "next/image";
import Link from "next/link";
import Back from "../Components/BackButton";

const ColumnOfImages = () => {
  const imagePaths = ["/GAA List.png", "/Robots List.png", "/Steam-List.png", "/CWM List.png", "/CP-List.png", "/Active-AI-List.png"];

  return (
    <div className="container flex h-screen">
      <div className="column-of-images flex-1 mt-10">
        <Image className="absolute top-0 left-0 object-cover opacity-60" src={"/LK-6-8.jpg"} alt="menu" width={933} height={612} />
        <Image className="absolute top-0 left-0" src="/Background-Decor-LK-JK.png" alt="logo" width={933} height={612} />
        <div className="flex flex-col items-center space-y-3 mt-14 ml-44 absolute">
          {imagePaths.map((src, index) => (
            <Image key={index} src={src} alt={`image-${index + 1}`} width={257} height={85} className="" />
          ))}
        </div>
        <div>
          <Link href={"/LK-Route"}>
            <Back />
          </Link>
        </div>
      </div>
      <div className="right-logo flex flex-col justify-center items-center flex-1 z-10 ml-52">
        <Image
          // Replace with your logo image path
          src="/lkt.png"
          alt="Your Logo"
          // Adjust width and height as needed
          width={200}
          height={100}
        />
        <Image
          // Replace with your logo image path
          src="/7-8 Button.png"
          alt="Your Logo"
          // Adjust width and height as needed
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default ColumnOfImages;
