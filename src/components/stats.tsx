"use client";
import React from "react";
import StatsTitle from "./stats-title";
import StatsTable from "./stats-table";

export default function Stats() {
  return (
    <section
      id="stats"
      className="h-screen w-full flex flex-col items-center gap-10"
    >
      <StatsTitle />
      <StatsTable />
    </section>
  );
}
