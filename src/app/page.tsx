"use client";
import React from "react";
import Header from "@/components/header";
import Introduction from "@/components/intro";
import AboutMe from "@/components/about-me";
import Stats from "@/components/stats";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div
      id="body"
      className="h-full w-full flex flex-col bg-[#393433] overflow-hidden"
    >
      <Header />
      <Introduction />
      <AboutMe />
      <Stats />
      <Footer />
    </div>
  );
}
