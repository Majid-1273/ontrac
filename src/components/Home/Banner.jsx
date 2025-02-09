import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#002347]">
        <div className="absolute inset-0 bg-[#001428]/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            ONTRAC
          </h1>
          
          {/* Enhanced Subheading */}
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-[#ABACB0]">   
            Empowering Organizations through Innovative Technology Solutions and 
            Exceptional Service Excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;