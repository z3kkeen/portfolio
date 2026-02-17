"use client";
import React from "react";
import { Progress } from "../ui/progress-green";

export default function GreenProgress(params: { procent: number }) {
  const value = params.procent;
  return (
    <>
      <Progress value={value} id="progress" />
    </>
  );
}
