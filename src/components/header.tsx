"use client";
import React from "react";

export default function Header() {
  return (
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
  );
}
