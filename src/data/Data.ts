import {
  IFooterDataMap,
  INav,
  ISocialMedia,
  ISwiperData,
} from "@/interfaces/interface";
import imghermoso from "@/image/Ermoso.png";
import imgmia from "@/image/imgMia.png";
import imghato from "@/image/imgHato.png";
import imgwine from "@/image/imgWineFull.png";
import imgcooper from "@/image/imgCoopertrans.png";
import imgquality from "@/image/imgquality.png";
import imgumicore from "@/image/imgumicore.png";

export const PrimaryNav: INav[] = [
  { name: "SERVIÇOS", reflink: "#services" },
  { name: "+DESC", reflink: "#+desc" },
  { name: "CONTATO", reflink: "#contact" },
];

export const SecondNav: INav[] = [
  { name: "REDES SOCIAIS", reflink: "#sociais" },
  { name: "ONBOARDING", reflink: "#onboarding" },
];

export const SwiperData: ISwiperData[] = [
  {
    title: "Projeto Ermoso Engenharia",
    description:
      "Sistema inovador via API para recebimento de laudos, permitindo ao cliente enviar e obter resultados mais ágeis e personalizados.",
    url: "https://ermoso-engenharia.vercel.app/",
    image: imghermoso,
  },
  {
    description:
      "Os clientes podem explorar o cardápio e efetuar reservas. Uma solução personalizada para uma experiência gastronômica inesquecível!",
    title: "Projeto Mia Cucina",
    date: "28/06/2023",
    url: "https://www.restaurantemiacucina.com.br/",
    image: imgmia,
  },
  {
    description:
      "Consulte os resultados dos exames do seu pet de forma rápida e fácil com nossa página dedicada. Cuide do seu melhor amigo com praticidade!",
    title: "Projeto DrHato",
    date: "10/04/2023",
    url: "https://drhatosbc.ddns.me/vet/scr/centraldeexames.asp",
    image: imghato,
  },
  {
    description:
      "Consulte os resultados dos exames do seu pet de forma rápida e fácil com nossa página dedicada. Cuide do seu melhor amigo com praticidade!",
    title: "Projeto WineFull",
    url: "https://wine-full.vercel.app/",
    image: imgwine,
  },
  {
    description:
      "Descubra a excelência em cotações com nosso Sistema avançado. Facilidade, agilidade e precisão reunidos para otimizar suas negociações.",
    title: "Projeto Cooper Trans",
    url: "https://coopertrans.vercel.app/",
    image: imgcooper,
  },
  {
    description:
      "Intranet inteligente: conectando equipes, acelerando projetos e aprimorando a colaboração. Simples, ágil e produtivo.",
    title: "Projeto Quality Fix",
    url: "https://quality-fix-intra-gamma.vercel.app/",
    image: imgquality,
  },
  {
    description:
      "Modernizamos nosso ambiente corporativo com um E-commerce interno, otimizando processos e impulsionando a eficiência.",
    title: "Projeto Umicore",
    url: "https://umicore.vercel.app/",
    image: imgumicore,
  },
];

export const FooterDataMap: IFooterDataMap[] = [
  { name: "Sobre nós", url: "" },
  { name: "História", url: "" },
  { name: "Termos de uso", url: "" },
  { name: "Política de privacidade", url: "" },
  { name: "Política de cookies", url: "" },
];

export const SupData: IFooterDataMap[] = [
  { name: "Chat online", url: "" },
  { name: "E-mail", url: "" },
  { name: "Fale conosco", url: "" },
];
