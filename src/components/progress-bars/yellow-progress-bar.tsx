"use client";
import React from "react";
import { Progress } from "../ui/progress-yellow";

export default function YellowProgress(params: { procent: number }) {
  const value = params.procent;
  return (
    <>
      <Progress value={value} id="progress" />
    </>
  );
}
