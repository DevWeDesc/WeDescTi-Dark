import Image from "next/image";
import React from "react";
import Logo from "@/image/Desc-Logo-Branco 1.png";
import { ISkeletonSwiper } from "@/interfaces/interface";

export const SkeletonSwiper = ({ scale }: ISkeletonSwiper) => {
  return (
    <div
      className={`w-full bg-gray-800 ${
        scale ? "scale-110" : "scale-95 hidden sm:block"
      }  rounded-3xl m-auto border-t-[26px] border-gray-700`}
    >
      <div className="space-y-4">
        <div className="bg-gray-700 mx-5 lg:max-w-[104] lg:h-[46px] mt-6 rounded-xl"></div>
        <h2 className="bg-gray-700 rounded-2xl text-gray-700 mx-5 text-3xl xxl:text-4xl font-mono min-h-[68.4px] xxl:min-h-[136px]"></h2>
        <div
          className="object-scale-down w-full h-[157px] bg-gray-700"
          id="Image"
        />
        <p className="mx-5 min-h-[120px] rounded-2xl bg-gray-700 text-gray-700"></p>
      </div>

      <div className="py-4 mt-4 w-full px-5 flex justify-between items-center">
        <div className="bg-gray-700 text-gray-700 min-h-[52px] w-full h-full rounded-xl"></div>
      </div>
    </div>
  );
};
