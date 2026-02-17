"use client";
import React from "react";
import { RotateWords } from "./rotate-words";
import Wave from "./wave";

export default function AboutMe() {
  return (
    <section id="about" className="h-full w-full flex flex-col gap-8">
      <RotateWords />
      <span className="px-10 flex gap-5 flex-wrap">
        <div id="blue" className="flex flex-col gap-8 w-full">
          <span id="blue_line" className="flex items-center ml-10">
            <div className="diamond w-5 h-5 bg-white mr-[-10px]"></div>
            <div id="line" className="b2 rotate-180"></div>
            <div className="diamond w-5 h-5 bg-[#6E8898] ml-[-10px]"></div>
          </span>

          <div
            id="box"
            className="h-full w-[40%] flex flex-col jusitfy-center ml-20 bg-[--box-blue-bg]"
          >
            <h2 className="text-[--box-blue-text]">Hello!</h2>
            <div
              id="s-box"
              className="bg-[--small-box-blue-bg] text-[--small-box-blue-text] border-[5px] border-[--box-blue-bg] flex flex-col gap-5"
            >
              <p>
                I&apos;ve been studying computer science in Finland for 3 years,
                earning me the title of &quot;software developer&quot;.
              </p>
              <p>
                For the next few years I will be studying to become an
                IT-engineer.
              </p>
            </div>
          </div>
        </div>

        <div id="yellow" className="flex flex-col ml-32 gap-8 w-full">
          <span id="yellow_line" className="flex items-center ml-10">
            <div className="diamond w-5 h-5 bg-white mr-[-10px]"></div>
            <div id="line" className="y w"></div>
            <div className="diamond w-5 h-5 bg-[#e7b068] ml-[-10px]"></div>
          </span>

          <div
            id="box"
            className="bg-[--box-yellow-bg] h-full w-[40%] flex flex-col jusitfy-center ml-20"
          >
            <h2 id="find-me" className="text-[--box-yellow-text]">
              Reach out!
            </h2>
            <span id="boxes" className="flex h-full w-full">
              <div
                id="s-box-y"
                className="w-[25%] bg-[--small-box-yellow-bg] border-[5px] border-[--box-yellow-bg] text-[--small-box-yellow-text]"
              >
                aaaa
              </div>
              <div
                id="s-box-y"
                className=" bg-[--small-box-yellow-bg] text-[--small-box-yellow-text] border-[5px] border-[--box-yellow-bg]"
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
          <div id="color-square" className="bg-[#4E7E82] h-10 w-10"></div>
          <div id="color-square" className="bg-[#6E8898] h-10 w-10"></div>
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
