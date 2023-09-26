"use client";
import React from "react";
import Image from "next/image";
import { INav } from "@/interfaces/interface";

export const Nav = ({ reflink, name, onclick, selected }: INav) => {
  return (
    <ul className="ml-12 hidden lg:flex gap-6 pt-2 text-sm" onClick={onclick}>
      <li
        className={
          selected === name
            ? "transition-all border-[white] brightness-90 border-b-[2px] px-1"
            : "brightness-50 transition-all hover:border-[white] hover:brightness-90 border-b-[0px] border-[black]"
        }
      >
        <a href={reflink}> {name}</a>
      </li>
    </ul>
  );
};
