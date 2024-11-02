"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Button() {
  const [showBubbles, setShowBubbles] = useState(false);
  const toggleMenu = () => {
    setShowBubbles(prevstate => !prevstate);
  };

  useEffect(() => {
    console.log(showBubbles);
  }, [showBubbles]);

  return (
    <div className="absolute">
      <div
        className={`flex pt-10 textalign-center cursor-pointer transition-transform 0.3s transform hover:scale-110`}
        onClick={toggleMenu}
      >
        <Image
          className="mr-64 mt-36"
          src="/more-(navigation).png"
          alt="logo"
          width={148}
          height={148}
        />
      </div>
      {showBubbles && (
        <>
          <div className="cursor-pointer">
            <Link href={"/"}>
              <div
                className="absolute pb-10"
                style={{ bottom: 150, left: -70 }}
              >
                <Image
                  className="ml-40 mb-16"
                  src="/home-bubble.png"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>
            </Link>
            <Link href={"/Menu"}>
              <div
                className="absolute pt-0"
                style={{ bottom: 100, left: -30 }}
              >
                <Image
                  className="ml-0 mb-20 z-10"
                  src="/menu-bubble.png"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>
            </Link>
            <Link href={"/Gallery"}>
              <div
                className="absolute"
                style={{ bottom: 70, left: 0 }}
              >
                <Image
                  className="ml-20 mb-2"
                  src="/gallery-bubble.png"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}