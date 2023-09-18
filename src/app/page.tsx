import { Banner } from "@/Components/Banner";
import { Header } from "@/Components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <section className="pl-20 flex items-center justify-center">
          <Banner />
        </section>
      </main>
    </>
  );
}
