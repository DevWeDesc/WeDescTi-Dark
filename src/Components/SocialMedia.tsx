import React from "react";
import { CardSocialMedia } from "./CardSocialMedia";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";

export const SocialMedia = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg bg-gradient-to-br from-[#100515] via-[#073421] to-[#100515] py-32 gap-8 text-center">
      <h2 className="text-center xxl:text-5xl text-4xl font-mono">
        Nossas Redes Sociais
      </h2>
      <p className="brightness-75 hover:brightness-100 transition-all max-w-[700px] text-center leading-relaxed">
        Conecte-se conosco nas redes sociais e faça parte de nossa comunidade de
        tecnologia, onde compartilhamos conhecimento, tendências e novidades do
        mundo da TI.
      </p>
      <div className="flex items-center justify-center w-full gap-8">
        <CardSocialMedia
          socialMedia="Linkedin"
          url="https://www.linkedin.com/company/wedesctecnologia/"
          followers="642"
          textButton="Seguir"
        >
          <BsLinkedin className="text-[48px] xxl:text-[64px]" />
        </CardSocialMedia>
        <CardSocialMedia
          socialMedia="Instagram"
          url="https://www.instagram.com/we.desc/"
          followers="951"
          textButton="Seguir"
        >
          <FaInstagramSquare className="text-[48px] xxl:text-[64px]" />
        </CardSocialMedia>
        <CardSocialMedia
          socialMedia="Youtube"
          url="https://www.youtube.com/@WeDesc."
          followers="+1k"
          textButton="Inscrever-se"
        >
          <AiFillYoutube className="text-[48px] xxl:text-[64px]" />
        </CardSocialMedia>
        <CardSocialMedia
          socialMedia="WhatsApp"
          url="https://api.whatsapp.com/send?phone=5511937302594&text=Olá%20desejo%20fazer%20um%20orçamento!!"
          followers="+100"
          textButton="Fazer orçamento"
        >
          <SlPeople className="text-[48px]  xxl:text-[64px]" />
        </CardSocialMedia>
      </div>
    </div>
  );
};
