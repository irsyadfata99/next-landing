import Image from "next/image";

export default function Card({ text }) {
  return (
    <div className="relative w-60 h-44">
      {/* Card Image */}
      <Image src="/Card-Shape.png" alt="card" layout="fill" objectFit="cover" className="rounded-lg" />

      {/* Overlay text */}
      <p className="absolute inset-10 flex items-center justify-center text-center text-lg font-semibold text-black">{text}</p>
    </div>
  );
}
