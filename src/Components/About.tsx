import { AboutData, AboutDataCards } from "@/data/Data";
import React from "react";
import { MdVerified } from "react-icons/md";

export const About = () => {
  const about =
    "https://png.pngtree.com/png-clipart/20230825/original/pngtree-people-working-at-home-office-picture-image_8715243.png";
  return (
    <div className=" grid grid-rows-2 py-20">
      {" "}
      <div className="grid-cols-2 grid">
        <div className="h-full flex justify-center">
          <img alt="" src={about} className="object-scale-down" />
        </div>
        <div className="px-12 py-6 space-y-3">
          <h2 className="w-full flex text-3xl font-mono">Somos a WeDesc!</h2>
          <p className="text-xl font-mono">
            Software personalizado para sua empresa!
          </p>
          <p className="brightness-75 transition-all hover:brightness-100">
            Justamente por ser criado conforme os processos e necessidades de
            cada negócio, a adaptação, a flexibilidade e a personalização já são
            vantajosas por si mesmas.
          </p>
          {AboutData.map((data, index) => (
            <p key={index} className="flex items-center gap-2">
              <MdVerified />
              <span> {data.name}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2  pr-20 gap-8">
        {AboutDataCards.map((data, index) => (
          <div
            className="p-10 bg-gray-700 rounded-2xl brightness-90 transition-all hover:brightness-100 hover:shadow-2xl hover:shadow-gray-600"
            key={index}
          >
            <p className="leading-relaxed">
              <strong className="text-lg font-mono">{data.title}</strong>{" "}
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
