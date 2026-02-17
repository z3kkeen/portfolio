"use client";
import React from "react";
import { Progress } from "../ui/progress-orange";

export default function OrangeProgress(params: { procent: number }) {
  const value = params.procent;
  return (
    <>
      <Progress value={value} id="progress" />
    </>
  );
}
