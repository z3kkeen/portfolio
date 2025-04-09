"use client";
import React from "react";
import Image from "next/image";
import wave from "/public/imgs/waves.png";

export default function Wave() {
  return (
    <Image
      src={wave}
      alt="wave"
      sizes="100vw"
      priority={true}
      style={{
        width: "100%",
        height: "auto",
        opacity: "90%",
      }}
    />
  );
}
