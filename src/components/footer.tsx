"use client";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="bg-zinc-900 h-20 w-[100vw] pl-32 z-20 text-zinc-600 flex items-center text-sm">
        © Zekken Zervices 2025
      </footer>
      <div
        id="wave-divider"
        className="h-96 w-full bg-[url('/imgs/waves.png')] bg-cover bg-no-repeat mt-[-20em] opacity-60 mb-[-10em] z-0 absolute"
      ></div>
    </div>
  );
}
