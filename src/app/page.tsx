"use client";
import React from "react";
import Header from "@/components/header";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Header />
      </div>
      <div className="mb-auto">
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
