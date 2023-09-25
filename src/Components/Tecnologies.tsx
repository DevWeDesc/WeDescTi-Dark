import React from "react";
import { MdVerified } from "react-icons/md";
import about from "@/image/robotic-hand.png";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiCsharp,
  SiFastify,
  SiTailwindcss,
  SiStyledcomponents,
  SiChakraui,
  SiBootstrap,
  SiMui,
} from "react-icons/si";

export const Tecnologies = () => {
  return (
    <div className=" grid grid-rows-2 py-20">
      {" "}
      <div className="xxl:grid-cols-3 grid-cols-2 grid">
        <div className="flex flex-col justify-center py-6 space-y-3 ">
          <h2 className="w-full flex text-3xl font-mono">
            Nossas Tecnologias!
          </h2>
          <p className="text-xl font-mono">
            A Tecnologia: Força Transformadora da Era Moderna!
          </p>
          <p className="brightness-75 transition-all hover:brightness-100 pr-12">
            A Tecnologia: Força Transformadora da Era Moderna A tecnologia é a
            força motriz da inovação, capacitando-nos a superar desafios,
            conectar pessoas e revolucionar setores.
          </p>
        </div>
        <div className="h-full flex w-full justify-center xxl:col-span-2">
          <Image
            alt=""
            src={about}
            className="xxl:pr-96 pr-20 w-[350px] xxl:w-auto object-scale-down"
          />
        </div>
      </div>
      <div className="space-y-16 mt-10  pr-20 xxl:pr-96 gap-8">
        <div>
          <h3 className="text-2xl font-mono">
            Linguagens de programação, Bibliotecas e Frameworks
          </h3>
        </div>
        <div className="grid grid-cols-6 space-y-16">
          <div className="w-full gap-4 flex-col h-full mt-16 flex items-center">
            <SiNextdotjs className="text-7xl hover:brightness-75 transition-all" />
            <p className="text-2xl font-mono">NextJs</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiReact className="text-7xl hover:text-sky-500 transition-all" />
            <p className="text-2xl font-mono ">React</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiTypescript className="text-7xl hover:text-blue-500 transition-all" />
            <p className="text-2xl font-mono">TypeScript</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiNodedotjs className="text-7xl hover:text-green-600 transition-all" />
            <p className="text-2xl font-mono">NodeJs</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiCsharp className="text-7xl hover:text-purple-600 transition-all" />
            <p className="text-2xl font-mono">C Sharp</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiFastify className="text-7xl hover:brightness-75" />
            <p className="text-2xl font-mono">Fastify</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiTailwindcss className="text-7xl hover:text-sky-400 transition-all" />
            <p className="text-2xl font-mono">TailwindCSS</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiStyledcomponents className="text-7xl hover:brightness-75" />
            <p className="text-2xl font-mono">Styled-Components</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiChakraui className="text-7xl hover:text-teal-400 transition-all" />
            <p className="text-2xl font-mono">Chakra-UI</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiBootstrap className="text-7xl hover:text-purple-500 transition-all" />
            <p className="text-2xl font-mono">BOOTSTRAP</p>
          </div>
          <div className="w-full gap-4 flex-col flex items-center">
            <SiMui className="text-7xl hover:text-blue-600 transition-all" />
            <p className="text-2xl font-mono"> MUI</p>
          </div>
        </div>
      </div>
    </div>
  );
};
