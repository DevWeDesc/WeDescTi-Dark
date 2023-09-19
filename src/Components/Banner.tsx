import React from "react";
import BannerImage from "@/image/imgBanner.png";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="min-h-[725px] h-full w-full flex items-center">
      <div className="flex flex-col justify-center z-[2] bg-none max-w-[720px] space-y-2">
        {" "}
        <h2 className="text-4xl xxl:text-5xl font-mono">
          Mantenha o foco no seu negócio, enquanto a{" "}
          <strong>Wedesc cuida da sua T.I</strong>
        </h2>
        <p className="brightness-75 hover:brightness-90 transition-all max-w-[600px]">
          Equipe especializada em TI pronta para atender às suas necessidades.
          Aumente a produtividade e reduza custos com nossos serviços de TI.
        </p>
        <button className="max-w-[200px] rounded-md py-2 hover:brightness-110 hover:border-[2px] hover:ml-4 transition-all mt-4 border-[1px] border-[#DC2626]">
          Nossos trabalhos!
        </button>
      </div>
      <Image
        alt=""
        src={BannerImage}
        className="absolute right-0 top-3 xxl:top-0 xxl:bottom-0 xxl:h-screen h-screen"
      ></Image>
    </div>
  );
};
