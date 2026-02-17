"use client";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import GreenProgress from "./progress-bars/green-progress-bar";
import YellowProgress from "./progress-bars/yellow-progress-bar";
import OrangeProgress from "./progress-bars/orange-progress-bar";
import OBS from "./obs";

export default function StatsTable() {
  return (
    <div className="w-[40%] flex flex-row-reverse gap-5 z-10">
      <OBS></OBS>
      <Table className="text-white border-white border-2 bg-[#393433]">
        <TableBody className="h-full w-full">
          <TableRow>
            <TableCell className="font-medium">JAVASCRIPT</TableCell>
            <TableCell className=" w-full">
              <GreenProgress procent={94}></GreenProgress>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">TYPESCRIPT</TableCell>
            <TableCell className="font-medium">
              <GreenProgress procent={90}></GreenProgress>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">REACT, NEXTJS</TableCell>
            <TableCell className="font-medium">
              <YellowProgress procent={70}></YellowProgress>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">SQL, SQLITE</TableCell>
            <TableCell className="font-medium">
              <OrangeProgress procent={45}></OrangeProgress>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">HTML, CSS</TableCell>
            <TableCell className="font-medium">
              <GreenProgress procent={90}></GreenProgress>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">C#, JAVA, PYTHON</TableCell>
            <TableCell className="font-medium">loading...</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
