"use client";
import { cn } from "@/app/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<{ left: string; animationDelay: string; animationDuration: string }[]>([]);

  useEffect(() => {
    const styles = new Array(number).fill(0).map((_, idx) => {
      const position = idx * (800 / number) - 400;
      return {
        left: `${position}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`,
      };
    });
    setMeteorStyles(styles);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={`meteor-${idx}`}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className,
          )}
          style={{
            top: "-40px",
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        ></span>
      ))}
    </motion.div>
  );
};