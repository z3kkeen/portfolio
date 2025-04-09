"use client";
import React from "react";
import { RotateWords } from "./rotate-words";
import Wave from "./wave";

export default function AboutMe() {
  return (
    <section id="about" className="h-full w-full flex flex-col gap-8">
      <RotateWords />
      <span className="px-10 flex gap-5 flex-wrap">
        <div id="blue" className="flex flex-col gap-8">
          <div id="line" className="b1"></div>

          <div
            id="box"
            className="flex flex-col jusitfy-center bg-[--box-blue-bg]"
          >
            <h2 className="text-[--box-blue-text]">Hello!</h2>
            <div
              id="s-box"
              className="bg-[--small-box-blue-bg] text-[--small-box-blue-text] border-[5px] border-[--box-blue-bg]"
            >
              <p>
                I&apos;m currently studying computer science in Optima, Finland.
                In the future I pla...
              </p>
            </div>
          </div>
        </div>

        <div id="yellow" className="flex flex-col gap-8">
          <div id="line" className="y"></div>
          <div id="box" className="bg-[--box-yellow-bg]">
            <h2 id="find-me" className="text-[--box-yellow-text]">
              Reach out!
            </h2>
            <span id="boxes" className="flex h-full w-full">
              <div
                id="s-box"
                className="bg-[--small-box-yellow-bg] border-[5px] border-[--box-yellow-bg] text-[--small-box-yellow-text]"
              >
                aaaa
              </div>
              <div
                id="s-box"
                className="w-[80%] bg-[--small-box-yellow-bg] text-[--small-box-yellow-text] border-[5px] border-[--box-yellow-bg]"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, consequuntur. Vitae consequuntur at fugit ipsam,{" "}
                </p>
              </div>
            </span>
          </div>
        </div>
      </span>
      {/* colored squares */}
      <div id="line" className="p z-10 border-1 border-[--box-purple-bg]"></div>
      <span className="flex gap-8 px-10">
        <div className="flex flex-col gap-3 z-10">
          <div id="color-square" className="bg-[#FFBF69] h-10 w-10"></div>
          <div id="color-square" className="bg-[#6E8898] h-10 w-10"></div>
          <div id="color-square" className="bg-[#c99ba5] h-10 w-10"></div>
        </div>
        <div id="box" className="bg-[--box-purple-bg] z-10">
          <h2 className="text-[--box-purple-text]">Previous Projects</h2>
          <div
            id="s-box"
            className="bg-[--small-box-purple-bg] text-[--small-box-purple-text] border-[5px] border-[--box-purple-bg]"
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          </div>
        </div>
      </span>
      <div className="rotate-180">
        <Wave />
      </div>
    </section>
  );
}
