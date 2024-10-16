import Image from "next/image";

export default function Button() {
  return (
    <div className="flex pt-0">
      <h1 className="text-white text-5xl absolute flex pl-52 pt-32">Start</h1>
      <Image src="/btn-home.png" alt="logo" width={20000} height={3600} />
    </div>
  );
}
