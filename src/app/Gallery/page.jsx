import React from "react";
import Image from "next/image";
import Link from "next/link";
import Back from "../Components/BackButton";
import CarouselBranch from "../Components/CarouselGalleries";

const slides = [
  {
    image: "/Gallery-1.jpg",
    title: "Lobby",
  },
  {
    image: "/Gallery-2.jpg",
    title: "Little Coder Room",
  },
  {
    image: "/Gallery-3.jpg",
    title: "Cubico for LK module",
  },
  {
    image: "/Gallery-4.jpg",
    title: "Dot Robot for LK module",
  },
  {
    image: "/Gallery-5.jpg",
    title: "Photon robot for LK Module",
  },
  {
    image: "/Gallery-6.jpg",
    title: "Junior Koders Room",
  },
  {
    image: "/Gallery-7.jpg",
    title: "Junior Koders Room",
  },
  {
    image: "/Gallery-8.jpg",
    title: "Junior Koders Room",
  },
];

const Galleries = () => {
  return (
    <div className="max-w-1920 max-h-1200 relative">
      <Image className="absolute top-0 left-0 w-[1920px] h-[612px] object-cover opacity-50" src={"/gallery.png"} alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0w-[1920px] h-[612px] object-fit" src="/Background-Gallery.png" alt="logo" width={933} height={612} />
      <div className="flex justify-center flex-col items-center text-5xl">
        <div>
          <Link href={"/Menu"}>
            <Back />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-20 z-20">
          <div className="w-fit h-60 ml-20 mt-7">
            <CarouselBranch slides={slides} autoSlide={true} />
          </div>
          <div className="w-fit ml-20 pt-44 pl-10 text-black">
            <h1>Koding Next</h1>
            <h1>Galleries</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
