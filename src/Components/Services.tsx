"use client";
import React, { useEffect, useState } from "react";
import { SwipperService } from "./SwipperService";
import Image from "next/image";
import bgServices from "@/image/+.png";

export const Services = () => {
  const [quantitySlides, setQuantitySlides] = useState(3.5);
  useEffect(() => {
    if (window.innerWidth >= 1600) {
      setQuantitySlides(3);
    } else {
      setQuantitySlides(3.5);
    }
  }, []);
  return (
    <div>
      <div className="w-full pb-6 flex flex-col items-center">
        <h3 className="pb-6 w-full text-center text-4xl xxl:text-5xl font-mono ">
          Nossos Serviços
        </h3>{" "}
        <p className="text-center max-w-[800px] brightness-75 leading-relaxed hover:brightness-100 transition-all">
          Na vanguarda da inovação tecnológica, a WeDesc é sua parceira de
          confiança para soluções de desenvolvimento de sistemas que impulsionam
          a transformação digital. Oferecemos uma gama abrangente de serviços,
          projetados para atender às necessidades únicas do seu negócio e
          alavancar sua vantagem competitiva.
        </p>
      </div>
      {/* <Image
        src={bgServices}
        className="absolute left-0 z-[-1] h-full w-full max-h-[720px]"
        alt=""
      /> */}
      <SwipperService quantitySlides={quantitySlides} />
    </div>
  );
};
