"use client";
import React from "react";
import Image from "next/image";
import pfp from "/public/imgs/pfp.jpg";
import { RotateWords } from "@/components/rotate-words";

export default function Home() {
  return (
    <div
      id="body"
      className="h-full w-full flex items-center flex-col bg-[#393433] overflow-hidden"
    >
      <header className="w-full h-12 z-20 bg-[#262626] flex fixed justify-center items-center ">
        <a href="#home" className="z-10">
          HOME
        </a>
        <span className="w-10 h-10 bg-[url('/icons/home.png')] bg-cover ml-[-1.5em]"></span>
        <div className="w-0.5 h-6 bg-[#5C4F4F] mx-4"></div>
        <a href="#about" className="z-10">
          ABOUT
        </a>
        <span className="w-8 h-8 bg-[url('/icons/info.png')] bg-cover ml-[-1em]"></span>
        <div className="w-0.5 h-6 bg-[#5C4F4F] mx-4"></div>
        <a href="#stats" className="z-10">
          STATS
        </a>
        <span className="w-10 h-10 bg-[url('/icons/stats.png')] bg-cover ml-[-1.5em]"></span>
        <div className="w-0.5 h-6 bg-[#5C4F4F] mx-4"></div>
        <a href="#find-me" className="z-10">
          FIND ME
        </a>
        <span className="w-10 h-10 bg-[url('/icons/contact-mail.png')] bg-cover ml-[-1.5em]"></span>
      </header>
      <section id="home" className="flex h-screen w-full justify-center pt-48">
        <span className="flex h-screen justify-center items-start gap-6">
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
        </span>
        <div
          id="wave-divider"
          className="h-full w-full z-10 bg-[url('/imgs/waves.png')] bg-contain bg-no-repeat mt-[15em] absolute"
        ></div>
      </section>

      <section id="about" className="px-10 h-screen w-full flex flex-col gap-5">
        <RotateWords />
        <div className="bg-[#4E7E80] ">
          <h2 className="text-[#AFCCCD]">Hello!</h2>
          <div className="bg-[#98B8B9] text-[#214649]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium beatae laborum consequuntur soluta iure adipisci, et
            </p>
          </div>
        </div>
        <div id="line" className="y"></div>
        <div className="bg-[#BF9257]">
          <h2 id="find-me" className="text-[#F9DDB8]">
            Reach out!
          </h2>
          <div className="bg-[#D2AB78] text-[#7B5829]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, consequuntur. Vitae consequuntur at fugit ipsam,{" "}
            </p>
          </div>
        </div>
        <div id="line" className="p"></div>
        <span className="flex gap-8">
          <div>
            <div className="flex flex-col gap-3">
              <div id="color-square" className="bg-[#FFBF69] h-10 w-10"></div>
              <div id="color-square" className="bg-[#6E8898] h-10 w-10"></div>
              <div id="color-square" className="bg-[#CFA5B4] h-10 w-10"></div>
            </div>
          </div>
          <div className="bg-[#5B6288]">
            <h2 className="text-[#D8DBF4]">Previous Projects</h2>
            <div className="bg-[#A0A5C2] text-[#494f72]">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        </span>
      </section>
      <div
        id="wave-divider"
        className="h-96 w-full bg-[url('/imgs/waves.png')] bg-cover bg-no-repeat mt-[-20em] rotate-180"
      ></div>
      <section
        id="stats"
        className="h-screen w-full flex flex-col items-center pt-10"
      >
        <div id="line" className="b2"></div>
        <h1 className="text-8xl">STATS</h1>
        <div id="line" className="b2"></div>
      </section>
      <div
        id="wave-divider"
        className="h-96 w-full bg-[url('/imgs/waves.png')] bg-cover bg-no-repeat mt-[-20em] opacity-60 mb-[-10em]"
      ></div>
    </div>
  );
}
