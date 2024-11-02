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
    <div className="relative h-screen w-screen">
      <Image className="absolute top-0 left-0 object-cover opacity-40" src={"/gallery.png"} alt="menu" width={933} height={612} />
      <Image className="absolute top-0 left-0" src="/Background-Gallery.png" alt="logo" width={933} height={612} />
      <div className="absolute text-black flex flex-col text-center justify-center">
        <div className="text-5xl flex flex-row-reverse mr-7 mt-4 z-10">
          <Link href={"/Menu"}>
            <Back />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-44">
          <div className="w-fit h-60 ml-14">
            <CarouselBranch slides={slides} autoSlide={true} />
          </div>
          <div className="w-fit ml-20 pt-16 pl-10">
            <h1>Koding Next</h1>
            <h1>All Branches</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
