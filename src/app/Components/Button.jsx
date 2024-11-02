import Image from "next/image";

export default function Button() {
  return (
    <div className="flex items-center ml-60">
      <Image src="/Start-Button.png" alt="logo" width={320} height={317} />
    </div>
  );
}
