import React from "react";

export const SubBanner = () => {
  return (
    <div className="py-24 grid pl-20 grid-cols-2 bg-gradient-to-r from-[#100515] to-[#290738]">
      <div className="w-full h-full flex items-center justify-center">
        <p className="m-0 py-20 text-2xl max-w-[350px] leading-relaxed font-mono">
          Nossa paixão é oferecer soluções tecnológicas inovadoras que
          impulsionam o crescimento e otimizam a eficiência do seu negócio.
        </p>
      </div>
      <div>
        <div className="w-[80%] h-[100%] bg-black border-[1px] border-[#0088FF]"></div>
      </div>
    </div>
  );
};
