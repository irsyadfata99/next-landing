import Image from "next/image";

export default function Button() {
  return (
    <div className="flex flex-col space-y-4 pt-32 items-center">
      {/* Button 1 */}
      <div className="flex items-center bg-blue-500 text-white rounded-lg overflow-hidden shadow-lg">
        <div className="bg-blue-700 px-4 py-3 font-semibold">1</div>
        <div className="flex-1 px-6 py-3 text-left">Button Text 1</div>
      </div>

      {/* Button 2 */}
      <div className="flex items-center bg-green-500 text-white rounded-lg overflow-hidden shadow-lg">
        <div className="bg-green-700 px-4 py-3 font-semibold">2</div>
        <div className="flex-1 px-6 py-3 text-left">Button Text 2</div>
      </div>

      {/* Button 3 */}
      <div className="flex items-center bg-red-500 text-white rounded-lg overflow-hidden shadow-lg">
        <div className="bg-red-700 px-4 py-3 font-semibold">3</div>
        <div className="flex-1 px-6 py-3 text-left">Button Text 3</div>
      </div>

      {/* Example Start Button with Image */}
      <div className="relative flex pt-4 items-center">
        <h1 className="text-white text-5xl absolute flex pl-20">Start</h1>
        <Image src="/btn-home.png" alt="Start Button" width={200} height={60} />
      </div>
    </div>
  );
}
