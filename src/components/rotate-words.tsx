"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["Zek", "Me", "Alex", "Zekken", "Zekk3en"];

export function RotateWords() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex gap-6">
        <h1 className="text-8xl font-bold tracking-widest text-white font-gothic  pt-[1.1em] [text-shadow:_0_5px_0_rgb(110_136_152_/_84%)]">
          ABOUT
        </h1>
        <AnimatePresence mode="wait">
          <motion.p
            id="my-names"
            key={words[index]}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="text-8xl font-bold tracking-widest text-white font-gothic mr-4 pt-[1.1em] [text-shadow:_0_5px_0_rgb(110_136_152_/_84%)]"
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div id="line" className="b"></div>
    </div>
  );
}
