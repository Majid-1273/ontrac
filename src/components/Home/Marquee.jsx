import React from "react";
import {
  SiTesla,
  SiStarbucks,
  SiCisco,
  SiIntel,
  SiLenovo,
  SiBox
} from "react-icons/si";

const Marquee = () => {
  const icons = [SiTesla, SiStarbucks, SiCisco, SiIntel, SiLenovo, SiBox];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#54A9FF] to-[#001F4D] py-8">
      <div className="flex w-max animate-scroll space-x-16">
        {[...icons, ...icons].map((Icon, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
          >
            <Icon className="text-white h-16 w-16 p-3 rounded-lg" />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); } 
          }
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
