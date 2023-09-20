"use client";
import { Banner } from "@/Components/Banner";
import { Header } from "@/Components/Header";
import { SubBanner } from "@/Components/SubBanner";
import { SwipperService } from "@/Components/SwipperService";
import Image from "next/image";
import bgServices from "@/image/+.png";
import { Footer } from "@/Components/Footer";
import { SocialMedia } from "@/Components/SocialMedia";
import { OnBoardingSection } from "@/Components/Onboardings/OnBoardingSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [quantitySlides, setQuantitySlides] = useState(3.5);
  useEffect(() => {
    if (window.innerWidth >= 1600) {
      setQuantitySlides(3);
    } else {
      setQuantitySlides(3.5);
    }
  }, []);
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <section
          id="init"
          className="pl-20 xxl:pl-96 flex items-center h-screen w-full bg-[#170f18] justify-center"
        >
          <Banner />
        </section>
        <section>
          <SubBanner />
        </section>
        <section id="services" className={`px-20 xxl:px-96 py-10 h-full`}>
          <Image
            src={bgServices}
            className="absolute left-0 z-[-1] h-full w-full max-h-[720px]"
            alt=""
          />
          <SwipperService quantitySlides={quantitySlides} />
        </section>
        <section id="sociais">
          <SocialMedia />
        </section>
        <section id="onboarding">
          <OnBoardingSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
