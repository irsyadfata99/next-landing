import React from "react";
import Image from "next/image";
import Link from "next/link";
import Back from "../Components/BackButton";

const ColumnOfImages = () => {
  const imagePaths = ["/2dg-List.png", "/Mobile-Apps-List.png", "/Roblox-1-List.png", "/Roblox-2-List-br.png", "/Website-List.png"];

  return (
    <div className="max-w-1920 max-h-1200 relative">
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-cover opacity-50" src="/JK-8-12.png" alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-fit" src="/Background-Decor-LK-JK.png" alt="logo" width={933} height={612} />
      <div className="text-black flex flex-col text-center justify-center">
        <div>
          <Link href={"/JK-Route"}>
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
            <Image src="/jk-title.png" alt="menu" width={246} height={246} />
            <Image src="/jk-812-button.png" alt="menu" width={277} height={277} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnOfImages;
