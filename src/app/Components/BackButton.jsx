import Image from "next/image";

export default function Back() {
  return (
    <div className="absolute z-10" style={{top:'26px', left:'814px'}}>
      <Image src="/Back-Button.png" alt="back" width={94} height={94} />
    </div>
  );
}