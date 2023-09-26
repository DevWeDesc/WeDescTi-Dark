"use client";
import React, { useState } from "react";
import Logo from "@/image/logo.png";
import Image from "next/image";
import { PrimaryNav, SecondNav } from "@/data/Data";
import { Nav } from "./Nav";
import { INav } from "@/interfaces/interface";

export const Header = () => {
  const [selected, setSelected] = useState("");
  return (
    <header className="font-sans fixed w-full z-20 bg-[#170f18] xxl:px-96 py-2 px-10 lg:px-20 flex items-center justify-between">
      <div className="flex items-center">
        <Image alt="" src={Logo} />
        {PrimaryNav.map((data: INav, index) => (
          <Nav
            onclick={() => setSelected(data.name)}
            selected={selected}
            name={data.name}
            reflink={data.reflink}
            key={index}
          />
        ))}
      </div>
      <div className="flex items-center">
        {SecondNav.map((data: INav, index) => (
          <Nav
            onclick={() => setSelected(data.name)}
            selected={selected}
            name={data.name}
            reflink={data.reflink}
            key={index}
          />
        ))}
      </div>
    </header>
  );
};
