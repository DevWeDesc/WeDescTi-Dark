"use client";
import { Banner } from "@/Components/Banner";
import { Header } from "@/Components/Header";
import { SubBanner } from "@/Components/SubBanner";
import { SwipperService } from "@/Components/SwipperService";
import Image from "next/image";

import { Footer } from "@/Components/Footer";
import { SocialMedia } from "@/Components/SocialMedia";
import { OnBoardingSection } from "@/Components/Onboardings/OnBoardingSection";
import { useEffect, useState } from "react";
import { Services } from "@/Components/Services";

export default function Home() {
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
        <section id="+desc">
          <SubBanner />
        </section>
        <section id="services" className={`px-20 xxl:px-96 py-10 h-full`}>
          <Services />
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
