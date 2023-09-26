"use client";
import React, { ReactNode, useState } from "react";
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
  SiJavascript,
} from "react-icons/si";
import { IDivTecnologies } from "@/interfaces/interface";

export const Tecnologies = () => {
  return (
    <div className="grid grid-rows-2 pb-20">
      {" "}
      <div className="xxl:grid-cols-3 grid-cols-2 grid">
        <div className="flex flex-col justify-between py-3 space-y-3 ">
          <div></div>
          <div className="space-y-4">
            <h2 className="w-full flex text-4xl xxl:text-5xl font-mono">
              Nossas Tecnologias!
            </h2>
            <p className="text-xl xxl:text-2xl font-mono">
              A Tecnologia: Força Transformadora da Era Moderna!
            </p>
            <p className="brightness-75 transition-all xxl:text-lg hover:brightness-100 pr-12">
              A Tecnologia: Força Transformadora da Era Moderna A tecnologia é a
              força motriz da inovação, capacitando-nos a superar desafios,
              conectar pessoas e revolucionar setores.
            </p>
          </div>
          <h3 className="text-3xl xxl:text-4xl font-mono pt-10">
            Linguagens de programação, Bibliotecas e Frameworks!
          </h3>
        </div>
        <div className="h-full flex w-full justify-center xxl:col-span-2">
          <Image
            alt=""
            src={about}
            className="xxl:pr-96 pr-20 w-[350px] xxl:w-auto object-scale-down"
          />
        </div>
      </div>
      <div className="mt-0 pr-20 xxl:pr-96 gap-8">
        <div className="grid grid-cols-6 grid-rows-2 gap-7 space-y-10">
          <DivTecnologies color="white" bg="">
            <SiNextdotjs className={`${classTecnologi}`} />
            <p className="text-2xl font-mono">NextJs</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="rgb(14 165 233)">
            <SiReact className={classTecnologi} />
            <p className="text-2xl font-mono ">React</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="rgb(59 130 246)">
            <SiTypescript className={`${classTecnologi} `} />
            <p className="text-2xl font-mono">TypeScript</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="rgb(22 163 74)">
            <SiNodedotjs className={`${classTecnologi}  `} />
            <p className="text-2xl font-mono">NodeJs</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="rgb(147 51 234)">
            <SiCsharp className={`${classTecnologi}  `} />
            <p className="text-2xl font-mono">C Sharp</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="">
            <SiFastify className={`${classTecnologi}  `} />
            <p className="text-2xl font-mono">Fastify</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="rgb(56 189 248)">
            <SiTailwindcss className={`${classTecnologi}   `} />
            <p className="text-2xl font-mono">TailwindCSS</p>
          </DivTecnologies>
          <DivTecnologies color="black" bg="rgb(249 168 212)">
            <SiStyledcomponents className={`${classTecnologi} `} />
            <p className="text-2xl font-mono">Styled-Components</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="rgb(45 212 191)">
            <SiChakraui className={`${classTecnologi} `} />
            <p className="text-2xl font-mono">Chakra-UI</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="rgb(168 85 247)">
            <SiBootstrap className={`${classTecnologi}  `} />
            <p className="text-2xl font-mono">BOOTSTRAP</p>
          </DivTecnologies>
          <DivTecnologies color="white" bg="rgb(29 78 216)">
            <SiMui className={`${classTecnologi}  `} />
            <p className="text-2xl font-mono"> MUI</p>
          </DivTecnologies>
          <DivTecnologies color="black" bg="rgb(250 204 21)">
            <SiJavascript className={`${classTecnologi}  `} />
            <p className="text-2xl font-mono"> JavaScript</p>
          </DivTecnologies>
          <div>
            {" "}
            <p>Bancos de Dados e ORMs</p>
          </div>
        </div>
      </div>
      {/* <div>
        <p>Bancos de Dados e ORMs</p>
      </div> */}
    </div>
  );
};

const classTecnologi = `text-6xl xxl:text-7xl transition-all`;

const DivTecnologies = ({ children, bg, color }: IDivTecnologies) => {
  const [styleDiv, setStyleDiv] = useState({
    backgroundColor: "",
    filter: "",
    color: "",
  });

  const handleStyle = () => {
    bg != ""
      ? setStyleDiv({ backgroundColor: bg, color: color, filter: "" })
      : setStyleDiv({
          filter: "brightness(1.5)",
          backgroundColor: "",
          color: "",
        });
  };
  const handleStyleDisable = () => {
    setStyleDiv({ backgroundColor: "", filter: "", color: "" });
  };
  return (
    <div
      onMouseOver={handleStyle}
      onMouseOut={handleStyleDisable}
      style={styleDiv}
      className="rounded-md w-full gap-4 flex-col h-full shadow-lg brightness-90 hover:brightness-110 hover:scale-105 transition-all hover:shadow-xl hover:shadow-gray-700 shadow-gray-700 mt-10 flex justify-center p-5 items-center"
    >
      {children}
    </div>
  );
};
