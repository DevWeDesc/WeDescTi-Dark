import React from "react";
import Logo from "@/image/Desc-Logo-Branco 1.png";
import Image from "next/image";
import arrowTop from "@/image/CaretUp.png";
import iconMap from "@/image/map-pin.png";

export const Footer = () => {
  return (
    <footer className="flex justify-between p-20">
      <div className="flex space-x-20">
        <div className="space-y-4">
          {" "}
          <h3 className="text-lg font-bold">MAPA DO SITE</h3>
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
          <h3 className="text-lg font-bold">PRECISA DE SUPORTE</h3>
          <p>chat online</p>
          <p>e-mail</p>
          <p>fale conosco</p>
        </div>
        <div className="space-y-4">
          {" "}
          <h3 className="text-lg font-bold">SIGA-NOS</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Instagram</p>
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
