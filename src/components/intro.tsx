"use client";
import React from "react";
import Image from "next/image";
import pfp from "/public/imgs/pfp.jpg";
import Wave from "./wave";

export default function Introduction() {
  return (
    <div className="h-screen w-full mt-60 flex flex-col justify-center items-center">
      <section
        id="home"
        className="flex h-full justify-center items-center pt-32"
      >
        <Image
          src={pfp}
          alt="pfp"
          width={140}
          height={140}
          className="rounded-full border-2 border-[#FFBF69]"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-8xl pl-3 tracking-widest [text-shadow:_0_5px_0_rgb(255_191_105_/_60%)]">
            ZEKKEN
          </h1>
          <h2 className="text-2xl pl-2 font-outline-2">Alex Henricson</h2>
        </div>

        <div className="flex flex-col gap-3">
          <div id="color-square" className="bg-[#FFBF69] h-10 w-10"></div>
          <div id="color-square" className="bg-[#6E8898] h-10 w-10"></div>
          <div id="color-square" className="bg-[#CFA5B4] h-10 w-10"></div>
        </div>
      </section>
      <Wave />
    </div>
  );
}
