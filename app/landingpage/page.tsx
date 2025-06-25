// "use client";
// import React from "react";
// import { SparklesCore } from "../components/ui/sparkles";

// export function SparklesPreview() {
//   return (
//     <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//       <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
//         Aceternity
//       </h1>
//       <div className="w-[40rem] h-40 relative">
//         {/* Gradients */}
//         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//         {/* Core component */}
//         <SparklesCore
//           background="transparent"
//           minSize={0.4}
//           maxSize={1}
//           particleDensity={1200}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />

//         {/* Radial Gradient to prevent sharp edges */}
//         <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//       </div>
//     </div>
//   );
// }


//app/landingpage/page.tsx
"use client";
import React, {useState, useEffect} from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function SparklesPreview() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or class on <html>
    const checkDarkMode = () => {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }

      // Optional: Check for Tailwind 'dark' class on <html>
      if (document.documentElement.classList.contains("dark")) {
        setIsDarkMode(true);
      }
    };

    checkDarkMode();
    // Add listener for changes in system theme
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkDarkMode);
        
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", checkDarkMode);
    };
  }, []);
  return (
    <div className="h-[38rem] w-full bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        
      <div className="flex items-end space-x-2">
        <span className="text-base font-bold md:text-xl lg:text-3xl text-black dark:text-white">Hi, I'm</span>
        {/* <h1 className="text-3xl md:text-7xl lg:text-9xl font-bold text-black dark:text-white"> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold text-black dark:text-white"
          >
            Shaivi Jain
          </motion.h1>
        {/* </h1> */}
      </div>
      <p className="text-lg md:text-xl lg:text-xl text-center font-medium leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4 mb-2">
        Crafting impactful digital experiences with precision, purpose,
        and passion. <br /> Explore a portfolio where design meets direction.
      </p>
      <div className="w-[60rem] h-2/5 relative">
        {/* Adjusted Gradients for white background */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-[2px] w-3/4 blur-sm opacity-30" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-px w-3/4 opacity-20" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent h-[5px] w-1/4 blur-sm opacity-20" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent h-px w-1/4 opacity-20" />

        {/* Core Sparkles Component */}
        <SparklesCore
          background="transparent"
          minSize={0.9}
          maxSize={1.5}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={isDarkMode ? "#FFFFFF" : "#000000"}
        />

        {/* Soft radial fade to blend sparkles into white */}
        <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="flex space-x-6 justify-center -mb-12 ">
      <a
        href="https://github.com/Shaivi1706"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
      >
        <Github size={28} />
      </a>
      <a
        href="https://twitter.com/your_handle"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-400 transition-colors duration-200"
      >
        <Twitter size={28} />
      </a>
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
      >
        <Linkedin size={28} />
      </a>
    </div>
    </div>
  );
}