import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface INav {
  reflink: string;
  name: string;
  onclick?: () => void;
  selected?: string;
}

export interface ISocialMedia {
  followers: string;
  children: ReactNode;
  textButton: string;
}

export interface IWeOnboarding {
  logo?: string | any;
  title: string;
  description: string;
  colorButton: string;
  imageRigth: string | StaticImageData;
}

export interface ISwiperService {
  quantitySlides: number;
}

export interface ISwiperData {
  borderColor: string;
  color: string;
  title: string;
  description: string;
}
