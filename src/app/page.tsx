import { Banner } from "@/Components/Banner";
import { Header } from "@/Components/Header";
import { Services } from "@/Components/Services";
import { SubBanner } from "@/Components/SubBanner";
import Image from "next/image";

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
        <section>
          <Services />
        </section>
      </main>
    </>
  );
}
