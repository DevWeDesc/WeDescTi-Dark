"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import Logo from "@/image/Desc-Logo-Branco 1.png";
import Arrow from "@/image/Vector (13).png";
import { ISwiperService } from "@/interfaces/interface";

export const SwipperService = ({ centeredCarousel }: ISwiperService) => {
  return (
    <>
      <Swiper
        effect={"auto"}
        grabCursor={true}
        centeredSlides={centeredCarousel}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={100}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className="hover:scale-105 max-w-xs transition-all w-full bg-[#143654] rounded-3xl border-t-[26px] border-[#0088FF] my-10 ">
          <div className="py-6 px-10 space-y-2">
            <Image alt="" className=" object-scale-down" src={Logo} />
            <h2 className="text-3xl xxl:text-4xl font-mono">Titulo</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="py-2 mt-4 w-full border-t-2 border-white">
            <a
              href=""
              className="min-w-full px-10 flex justify-between items-center hover:ml-2 transition-all brightness-150"
            >
              <strong>Mais sobre titulo</strong>
              <Image
                alt=""
                className="h-4 w-3 object-contain"
                src={Arrow}
              ></Image>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 max-w-xs transition-all w-full bg-[#761B1B] rounded-3xl border-t-[26px] border-[#DC2626] my-10 ">
          <div className="py-6 px-10 space-y-2">
            <Image alt="" className=" object-scale-down" src={Logo} />
            <h2 className="text-3xl font-mono">Titulo</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="py-2 mt-4 w-full border-t-2 border-white">
            <a
              href=""
              className="min-w-full px-10 flex justify-between items-center hover:ml-2 transition-all brightness-150"
            >
              <strong>Mais sobre titulo</strong>
              <Image
                alt=""
                className="h-4 w-3 object-contain"
                src={Arrow}
              ></Image>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 max-w-xs transition-all w-full bg-[#442054] rounded-3xl border-t-[26px] border-[#AB1BEE] my-10 ">
          <div className="py-6 px-10 space-y-2">
            <Image alt="" className=" object-scale-down" src={Logo} />
            <h2 className="text-3xl font-mono">Titulo</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="py-2 mt-4 w-full border-t-2 border-white">
            <a
              href=""
              className="min-w-full px-10 flex justify-between items-center hover:ml-2 transition-all brightness-150"
            >
              <strong>Mais sobre titulo</strong>
              <Image
                alt=""
                className="h-4 w-3 object-contain"
                src={Arrow}
              ></Image>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 max-w-xs transition-all w-full bg-[#143654] rounded-3xl border-t-[26px] border-[#0088FF] my-10 ">
          <div className="py-6 px-10 space-y-2">
            <Image alt="" className=" object-scale-down" src={Logo} />
            <h2 className="text-3xl font-mono">Titulo</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="py-2 mt-4 w-full border-t-2 border-white">
            <a
              href=""
              className="min-w-full px-10 flex justify-between items-center hover:ml-2 transition-all brightness-150"
            >
              <strong>Mais sobre titulo</strong>
              <Image
                alt=""
                className="h-4 w-3 object-contain"
                src={Arrow}
              ></Image>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 max-w-xs transition-all w-full bg-[#761B1B] rounded-3xl border-t-[26px] border-[#DC2626] my-10 ">
          <div className="py-6 px-10 space-y-2">
            <Image alt="" className=" object-scale-down" src={Logo} />
            <h2 className="text-3xl font-mono">Titulo</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="py-2 mt-4 w-full border-t-2 border-white">
            <a
              href=""
              className="min-w-full px-10 flex justify-between items-center hover:ml-2 transition-all brightness-150"
            >
              <strong>Mais sobre titulo</strong>
              <Image
                alt=""
                className="h-4 w-3 object-contain"
                src={Arrow}
              ></Image>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
