"use client";
import React from "react";

export default function StatsTitle() {
  return (
    <div className="h-full w-[70%] flex flex-col">
      <div id="line" className="b2 ml-[30%] "></div>
      <span className="flex gap-4 bg-[#747170]">
        <div className="clipped h-full"></div>
        <span className="flex ">
          <h1 className="text-8xl text-center">STATS</h1>
        </span>
        <div className="clipped h-full rotate-180"></div>
      </span>
      <div id="line" className="b2 rotate-180"></div>
    </div>
  );
}
