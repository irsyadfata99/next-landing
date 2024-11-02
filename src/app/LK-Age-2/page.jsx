import React from "react";
import Image from "next/image";
import Link from "next/link";
import Back from "../Components/BackButton";

const ColumnOfImages = () => {
  const imagePaths = ["/GAA List.png", "/Robots List.png", "/Steam-List.png", "/CWM List.png", "/CP-List.png", "/Active-AI-List.png"];

  return (
    <div className="max-w-1920 max-h-1200 relative">
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-cover opacity-50" src={"/LK-6-8.png"} alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-fit" src="/Background-Decor-LK-JK.png" alt="logo" width={933} height={612} />
      <div className="text-black flex flex-col text-center justify-center">
        <div>
          <Link href={"/LK-Route"}>
            <Back />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-28 ml-44 z-20">
          <div>
            {imagePaths.map((src, index) => (
              <Image key={index} src={src} alt={`image-${index + 1}`} width={257} height={85} className="" />
            ))}
          </div>
          <div>
            <Image src="/LK-title.png" alt="menu" width={246} height={246} />
            <Image src="/lk-78-button.png" alt="menu" width={277} height={277} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnOfImages;
