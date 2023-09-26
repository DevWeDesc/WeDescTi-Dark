import React from "react";

export const SubBanner = () => {
  return (
    <div className="lg:py-24 px-10 lg:px-0 gap-5 grid lg:pl-20 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-gradient-to-r from-[#100515] to-[#290738]">
      <div className="w-full h-full flex items-center justify-center">
        <p className="m-0 lg:py-20 lg:px-0 text-center lg:text-left pt-10 xxl:text-3xl xxl:max-w-[400px] text-md lg:text-2xl max-w-[350px] leading-relaxed font-mono">
          Nossa paixão é oferecer soluções tecnológicas inovadoras que
          impulsionam o crescimento e otimizam a eficiência do seu negócio.
        </p>
      </div>
      <div className="flex items-center justify-center mb-10 lg:mb-0 lg:block">
        <div className=" h-[100%] w-full xxl:w-[69%] lg:h-[100%] bg-black border-[1px] border-[#0088FF]"></div>
      </div>
    </div>
  );
};
