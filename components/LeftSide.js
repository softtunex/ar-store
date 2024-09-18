// components/LeftSide.js
import Image from "next/image";

export default function LeftSide() {
  return (
    <div className="w-1/2 relative bg-gray-700">
      <img
        src="/ar_image.webp"
        alt="Promotional Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute text-white top-1/2 left-10 transform -translate-y-1/2">
        <h1 className="text-5xl font-bold">Get Product for Free</h1>
        <p>Your promotional message goes here.</p>
      </div>
    </div>
  );
}
