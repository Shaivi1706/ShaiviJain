// //app/landingpage/page.tsx
// "use client";
// import React, {useState, useEffect} from "react";
// import { SparklesCore } from "../components/ui/sparkles";
// import { Github, Twitter, Linkedin } from "lucide-react";
// import { motion } from "framer-motion";

// export function SparklesPreview() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Check system preference or class on <html>
//     const checkDarkMode = () => {
//       if (
//         window.matchMedia &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches
//       ) {
//         setIsDarkMode(true);
//       } else {
//         setIsDarkMode(false);
//       }

//       // Optional: Check for Tailwind 'dark' class on <html>
//       if (document.documentElement.classList.contains("dark")) {
//         setIsDarkMode(true);
//       }
//     };

//     checkDarkMode();
//     // Add listener for changes in system theme
//     window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkDarkMode);
        
//     return () => {
//       window
//         .matchMedia("(prefers-color-scheme: dark)")
//         .removeEventListener("change", checkDarkMode);
//     };
//   }, []);
//   return (
//     <div className="h-[38rem] w-full bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        
//       <div className="flex items-end space-x-2">
//         <span className="text-base font-bold md:text-xl lg:text-3xl text-black dark:text-white">Hi, I'm</span>
//         {/* <h1 className="text-3xl md:text-7xl lg:text-9xl font-bold text-black dark:text-white"> */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-6xl font-extrabold text-black dark:text-white"
//           >
//             Shaivi Jain
//           </motion.h1>
//         {/* </h1> */}
//       </div>
//       <p className="text-lg md:text-xl lg:text-xl text-center font-medium leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4 mb-2">
//         Crafting impactful digital experiences with precision, purpose,
//         and passion. <br /> Explore a portfolio where design meets direction.
//       </p>
//       <div className="w-[60rem] h-2/5 relative">
//         {/* Adjusted Gradients for white background */}
//         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-[2px] w-3/4 blur-sm opacity-30" />
//         <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-px w-3/4 opacity-20" />
//         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent h-[5px] w-1/4 blur-sm opacity-20" />
//         <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent h-px w-1/4 opacity-20" />

//         {/* Core Sparkles Component */}
//         <SparklesCore
//           background="transparent"
//           minSize={0.9}
//           maxSize={1.5}
//           particleDensity={1200}
//           className="w-full h-full"
//           particleColor={isDarkMode ? "#FFFFFF" : "#000000"}
//         />

//         {/* Soft radial fade to blend sparkles into white */}
//         <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//       </div>
      

//       {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-space-purple/20 blur-[100px] pointer-events-none"></div> */}

//       <div className="flex space-x-6 justify-center -mb-12 ">
//       <a
//         href="https://github.com/Shaivi1706"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
//       >
//         <Github size={28} />
//       </a>
//       <a
//         href="https://twitter.com/your_handle"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-400 transition-colors duration-200"
//       >
//         <Twitter size={28} />
//       </a>
//       <a
//         href="https://linkedin.com/in/yourprofile"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
//       >
//         <Linkedin size={28} />
//       </a>
//     </div>
//     </div>
//   );
// }
"use client";
import React, {useState, useEffect} from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Define the skill type
interface Skill {
  name: string;
  color: string;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
}

// Generate random positions and animations for skills
const generateRandomSkills = (): Skill[] => {
  const skillNames = [
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Python", color: "#3776AB" },
    { name: "C++", color: "#00599C" },
    { name: "R", color: "#276DC3" },
    { name: "Node.js", color: "#339933" },
    { name: "Express.js", color: "#000000" },
    { name: "Flask", color: "#000000" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Git", color: "#F05032" },
    { name: "Docker", color: "#2496ED" },
    { name: "AI/ML", color: "#FF6F00" },
    { name: "UI/UX", color: "#FF0080" },
    { name: "Figma", color: "#F24E1E" },
    { name: "Tailwind", color: "#06B6D4" }
  ];

  return skillNames.map((skill, index) => ({
    ...skill,
    initialX: Math.random() * 100, // Random percentage across screen width
    initialY: Math.random() * 100, // Random percentage across screen height
    duration: 15 + Math.random() * 20, // Random duration between 15-35 seconds
    delay: Math.random() * 10 // Random delay up to 10 seconds
  }));
};

export function SparklesPreview() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(generateRandomSkills());
  }, []);

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

  // Generate random floating animation
  const generateRandomMotion = () => {
    return {
      x: [
        0,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        0
      ],
      y: [
        0,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        0
      ],
      rotate: [0, Math.random() * 360],
    };
  };

  return (
      <div className="h-[38rem] w-full min-h-screen  bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
        
        {/* Sparkles Background - Lower z-index */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="w-full h-full relative">
            {/* Adjusted Gradients for white background */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-[2px] w-3/4 blur-sm opacity-30" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-black to-transparent h-px w-3/4 opacity-20" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent h-[5px] w-1/4 blur-sm opacity-20" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent h-px w-1/4 opacity-20" />

            {/* Soft radial fade to blend sparkles */}
            <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        {/* Floating Skills - Higher z-index */}
        <div className="absolute inset-0 w-full h-full z-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{
                left: `${skill.initialX}%`,
                top: `${skill.initialY}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                ...generateRandomMotion(),
              }}
              transition={{
                opacity: { duration: 1, delay: skill.delay },
                scale: { duration: 0.5, delay: skill.delay },
                x: {
                  duration: skill.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                y: {
                  duration: skill.duration * 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                rotate: {
                  duration: skill.duration * 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
            >
              <div
                className="px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: `${skill.color}15`,
                  borderColor: skill.color,
                  color: isDarkMode 
                    ? '#ffffff' 
                    : skill.color === '#000000' 
                      ? '#333333' 
                      : skill.color,
                  transform: 'translate(-50%, -50%)', // Center the badge on its position
                }}
              >
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Main Content - Highest z-index */}
        {/* <div className="flex items-end space-x-2 z-30 relative">
          <span className="text-base font-bold md:text-xl lg:text-3xl text-black dark:text-white">Hi, I'm</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold text-black dark:text-white"
          >
            Shaivi Jain
          </motion.h1>
        </div>
        
        <p className="text-lg md:text-xl lg:text-xl text-center font-medium leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4 mb-8 z-30 relative">
          Crafting impactful digital experiences with precision, purpose,
          and passion. <br /> Explore a portfolio where design meets direction.
        </p> */}

        <div className="relative h-[100vh] w-full bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden">
  <div className="relative h-[100vh] w-full bg-white dark:bg-black flex flex-col items-center justify-center overflow-hidden">

  {/* MAIN TEXT */}
  <div className="z-30 text-center px-4">
    <div className="flex flex-col items-center">
      <div className="flex items-end space-x-2">
        <span className="text-base font-bold md:text-xl lg:text-3xl text-black dark:text-white">
          Hi, I'm
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold text-black dark:text-white"
        >
          Shaivi Jain
        </motion.h1>
      </div>

      <p className="text-lg md:text-xl lg:text-xl font-medium text-gray-700 dark:text-gray-300 mt-4 max-w-3xl leading-relaxed">
        Crafting impactful digital experiences with precision, purpose,<br />
        and passion. Explore a portfolio where design meets direction.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex space-x-6 justify-center mt-6">
        {/* your social icons */}
      </div>
    </div>
  </div>

  {/* SPARKLES LAYER - Below the text only */}
  <div className="absolute bottom-0 w-full h-[250px] z-10">
    <div className="relative w-full h-full">
      <SparklesCore
        background="transparent"
        minSize={0.9}
        maxSize={1.5}
        particleDensity={1200}
        className="w-full h-full"
        particleColor={isDarkMode ? "#ffffff" : "#000000"}
      />

      {/* U-shaped mask to make sparkles look curved */}
      <div className="absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(300px_150px_at_center,white,transparent)]"></div>
    </div>
  </div>
</div>

  {/* Floating Skills */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    {skills.map((skill) => (
      <motion.div
        key={skill.name}
        className="absolute"
        style={{
          left: `${skill.initialX}%`,
          top: `${skill.initialY}%`,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          ...generateRandomMotion(),
        }}
        transition={{
          opacity: { duration: 1, delay: skill.delay },
          scale: { duration: 0.5, delay: skill.delay },
          x: {
            duration: skill.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          y: {
            duration: skill.duration * 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          rotate: {
            duration: skill.duration * 2,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 }
        }}
      >
        <div
          className="px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: `${skill.color}15`,
            borderColor: skill.color,
            color: isDarkMode 
              ? '#ffffff' 
              : skill.color === '#000000' 
                ? '#333333' 
                : skill.color,
          }}
        >
          {skill.name}
        </div>
      </motion.div>
    ))}
  </div>

  {/* Main Centered Content */}
  <div className="relative z-30 text-center px-4">
    <div className="flex flex-col items-center">

      <div className="flex space-x-6 justify-center mt-6">
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
    </div>
    </div>
    </div>
  );
}