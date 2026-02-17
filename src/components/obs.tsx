"use client";
import React from "react";

export default function OBS() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex flex-row gap-3">
        <div id="color-square" className="bg-[#6E8898] h-10 w-10"></div>
        <div id="color-square" className="bg-[#4E7E82] h-10 w-10"></div>
        <div id="color-square" className="bg-[#FFBF69] h-10 w-10"></div>
      </div>
      <div className="w-[30%] mt-16 pl-[10%] pr-5 pt-10 h-[38%] bg-[#747170] bg-opacity-65 text-white border-2 border-white absolute">
        <h2 className="text-xl tracking-widest">
          <b>OBS!</b>
        </h2>
        <p className="text-lg mt-3 tracking-wide">
          Please note that I am always willing to learn and/or teach myself new
          coding languages!
        </p>
      </div>
    </div>
  );
}
