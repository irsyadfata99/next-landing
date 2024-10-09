import "./globals.css";
import Menu from "../Pages/Menu.jsx";

export default function Home() {
  return (
    <div className="mx-auto text-center justify-center relative h-screen w-screen">
      <video src="/sample.mp4" autoPlay muted preload="metadata" loop className="absolute top-0 left-0 w-full h-full object-cover opacity-15"></video>
      <div className="z-10 relative pt-2">
        <Menu />
      </div>
    </div>
  );
}
