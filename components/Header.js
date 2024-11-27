import Image from "next/image";
import Button from "./Login";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="mt-4 text-3xl font-bold text-black">WARMTH FROM HOME</p>
      <Image
        src="/On-live.png"
        width={500}
        height={300}
        alt="On-live logo"
      />
      <br />
      <Button />
    </div>
  );
}
