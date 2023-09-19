import React from "react";
import Logo from "@/image/Desc-Logo-Branco 1.png";
import Image from "next/image";
import arrowTop from "@/image/CaretUp.png";
import iconMap from "@/image/map-pin.png";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex justify-between p-20">
      <div className="flex space-x-20">
        <div className="space-y-4">
          {" "}
          <h3 className="text-lg font-mono">MAPA DO SITE</h3>
          <p>
            {" "}
            <a href="">Sobre nós</a>
          </p>
          <p>
            <a href=""> historia</a>
          </p>
          <p>
            <a href=""> termos de uso</a>
          </p>
          <p>
            <a href=""> politica de privacidade</a>
          </p>
          <p>
            <a href=""> politica de cookies</a>
          </p>
        </div>
        <div className="space-y-4">
          {" "}
          <h3 className="text-lg font-mono">PRECISA DE SUPORTE?</h3>
          <p>chat online</p>
          <p>e-mail</p>
          <p>fale conosco</p>
        </div>
        <div className="space-y-4">
          {" "}
          <h3 className="text-lg font-mono">SIGA-NOS</h3>
          <div className="flex items-center gap-4">
            <a href="">
              <FaLinkedinIn className="text-4xl  hover:bg-blue-500 p-1 hover:p-2 rounded-md transition-all" />
            </a>
            <a href="">
              {" "}
              <FaFacebookF className="text-4xl hover:bg-blue-600 p-1 hover:p-2 rounded-md transition-all" />
            </a>
            <a href="">
              {" "}
              <FiInstagram className="text-4xl p-0 hover:p-1 rounded-md hover:bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 transition-all" />
            </a>
          </div>
          <Image src={Logo} alt="" />
          <p className="max-w-[217px]">
            Nós acreditamos no sucesso dos nossos clientes
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <a href="" className="flex items-center gap-6">
          <p>Voltar ao topo </p> <Image alt="" src={arrowTop}></Image>
        </a>

        <div className="flex flex-col gap-4">
          {" "}
          <h3 className="flex gap-2">
            {" "}
            <Image alt="" className="object-scale-down" src={iconMap} />{" "}
            <p className="text-2xl">São Paulo</p>{" "}
          </h3>
          <p className="max-w-[300px] leading-[40px]">
            R. Adolfo Bastos, 598 - 71 - Vila Bastos Santo André - SP, 09041-000
          </p>
        </div>
      </div>
    </footer>
  );
};
