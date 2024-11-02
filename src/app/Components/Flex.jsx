import Image from "next/image";

export default function Button() {
  return (
    <div className="relative flex items-center justify-center w-full h-full pt-10">
      {/* Image with adjusted width and height */}
      <Image
        src="/2dg-List.png"
        alt="logo"
        width={500} // Adjust to desired dimensions
        height={90} // Adjust to desired dimensions
        className="w-auto h-auto object-cover"
      />
    </div>
  );
}
