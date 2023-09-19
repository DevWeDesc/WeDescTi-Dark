import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab, Lato } from "next/font/google";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "WeDesc - Soluçõe em Tecnologia",
  description:
    "A We Desc é uma empresa dedicada a impulsionar o sucesso de seus clientes por meio de soluções de suporte e desenvolvimento de sistemas sob medida. Com um compromisso inabalável com a excelência técnica e a satisfação do cliente, somos uma força motriz no mundo da tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
