"use client";
import React from "react";

export default function StatsTitle() {
  return (
    <div className="h-[25%] w-[75%] flex flex-col justify-center text-white">
      <span className="flex items-center justify-end">
        <div className="diamond w-6 h-6 bg-[#6E8898] "></div>
        <div id="line" className="b2 ml-[-10px]"></div>
        <div className="diamond w-6 h-6 bg-white ml-[-10px] mr-[-10px]"></div>
      </span>
      <span
        id="title-container"
        className="h-[80%] w-full flex items-center justify-center my-1"
      >
        <h1 className="text-8xl text-center">STATS</h1>
      </span>
      <span className="flex items-center">
        <div className="diamond w-6 h-6 bg-white ml-[-10px]"></div>
        <div id="line" className="b2 rotate-180 ml-[-10px]"></div>
        <div className="diamond w-6 h-6 bg-[#6E8898] ml-[-10px]"></div>
      </span>
    </div>
  );
}
