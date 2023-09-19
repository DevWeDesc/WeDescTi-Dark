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
