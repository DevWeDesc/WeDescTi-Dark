import { Banner } from "@/Components/Banner";
import { Header } from "@/Components/Header";
import { SubBanner } from "@/Components/SubBanner";
import { SwipperService } from "@/Components/SwipperService";
import Image from "next/image";
import bgServices from "@/image/+.png";
import { Footer } from "@/Components/Footer";
import { SocialMedia } from "@/Components/SocialMedia";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <section className="pl-20 flex items-center justify-center">
          <Banner />
        </section>
        <section>
          <SubBanner />
        </section>
        <section id="services" className="px-[70px] py-4 h-full">
          <Image
            src={bgServices}
            className="absolute left-0 z-[-1] h-full w-full max-h-[720px]"
            alt=""
          />
          <SwipperService />
        </section>
        <section id="sociais">
          <SocialMedia />
        </section>
        <Footer />
      </main>
    </>
  );
}
