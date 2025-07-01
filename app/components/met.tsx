// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Meteors } from "../components/ui/meteors";

// export function MeteorsDemo() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const cards = [
//     {
//       title: "Languages & Scripting",
//       desc: ["C++", "Python", "JavaScript", "TypeScript", "R"],
//     },
//     {
//       title: "Web Development",
//       desc: [
//         "HTML5", "CSS3", "JavaScript", "ES6+",
//         "React.js", "Next.js",
//         "Node.js", "Express.js", "Flask",
//         "REST APIs"
//       ],
//     },
//     {
//       title: "Databases & Data Stores",
//       desc: ["MongoDB", "PostgreSQL", "MySQL"],
//     },
//     {
//       title: "AI / Machine Learning",
//       desc: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow"],
//     },
//     {
//       title: "DevOps & Tools",
//       desc: ["Git", "GitHub", "Docker", "Postman", "Vercel"],
//     },
//     {
//       title: "Design & Prototyping",
//       desc: ["Figma", "UI/UX", "Prototyping"],
//     },
//   ];

// useEffect(() => {
//   const scrollContainer = scrollRef.current;
//   if (!scrollContainer) return;

//   let animationFrameId: number;
//   const scrollSpeed = 2.5; 

//   const smoothScroll = () => {
//     if (
//       scrollContainer.scrollLeft + scrollContainer.clientWidth >=
//       scrollContainer.scrollWidth
//     ) {
//       scrollContainer.scrollLeft = 0;
//     } else {
//       scrollContainer.scrollLeft += scrollSpeed;
//     }

//     animationFrameId = requestAnimationFrame(smoothScroll);
//   };

//   animationFrameId = requestAnimationFrame(smoothScroll);

//   return () => cancelAnimationFrame(animationFrameId);
// }, []);

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16"></div>

//         <div className="overflow-x-auto w-full no-scrollbar" ref={scrollRef}>
//           <div className="flex gap-8 px-10 w-max pb-8">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`relative flex-shrink-0 w-[380px] h-auto group transition-all duration-300 ${
//                   hoveredCard === index ? "scale-105 ring-4 ring-purple-500/40" : ""
//                 }`}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 {/* Main card */}
//                 <div className="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                  
//                   {/* Content */}
//                   <div className="relative z-10 p-8 h-full flex flex-col">
//                     {/* Header */}
//                     <div className="flex items-center gap-4 mb-6">
//                       <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
//                         {card.title}
//                       </h3>
//                     </div>

//                     {/* Skills list */}
//                     <div className="flex-1 mb-6">
//                       <div className="flex flex-wrap gap-3">
//                         {card.desc.map((skill, idx) => (
//                           <div
//                             key={idx}
//                             className="group/skill relative bg-gray-900/60 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-300 font-medium hover:text-white transition-all duration-300 cursor-pointer overflow-hidden"
//                           >
//                             {/* Animated border shimmer */}
//                             <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent group-hover/skill:from-blue-400/80 group-hover/skill:via-purple-400/80 group-hover/skill:to-cyan-400/80 transition-all duration-300">
//                               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000 ease-out" />
//                               <div className="h-full w-full rounded-lg bg-gray-900/80" />
//                             </div>
                            
//                             {/* Content */}
//                             <span className="relative z-10 transition-all duration-200">
//                               {skill}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Meteors */}
//                   <Meteors number={100} />

//                   {/* Corner decoration */}
//                   <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
//                   <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }

//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import React, { useState, useMemo } from "react";
import { Meteors } from "../components/ui/meteors";

export function MeteorsDemo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Languages & Scripting",
      desc: ["C++", "Python", "JavaScript", "TypeScript", "R"],
    },
    {
      title: "Web Development",
      desc: [
        "HTML5", "CSS3", "JavaScript", "ES6+",
        "React.js", "Next.js",
        "Node.js", "Express.js", "Flask",
        "REST APIs"
      ],
    },
    {
      title: "Databases & Data Stores",
      desc: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "AI / Machine Learning",
      desc: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow"],
    },
    {
      title: "DevOps & Tools",
      desc: ["Git", "GitHub", "Docker", "Postman", "Vercel"],
    },
    {
      title: "Design & Prototyping",
      desc: ["Figma", "UI/UX", "Prototyping"],
    },
  ];

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = useMemo(() => [...cards, ...cards], []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16"></div>

        {/* Container with overflow hidden */}
        <div className="overflow-hidden w-full">
          {/* Scrolling wrapper with CSS animation */}
          <div className="animate-scroll flex gap-8 px-10 pb-8 hover:pause-scroll">
            {duplicatedCards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className={`relative flex-shrink-0 w-[380px] h-auto group transition-all duration-300 ${
                  hoveredCard === index ? "scale-105 ring-4 ring-purple-500/40" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main card */}
                <div className="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {card.title}
                      </h3>
                    </div>

                    {/* Skills list */}
                    <div className="flex-1 mb-6">
                      <div className="flex flex-wrap gap-3">
                        {card.desc.map((skill, idx) => (
                          <div
                            key={idx}
                            className="group/skill relative bg-gray-900/60 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-300 font-medium hover:text-white transition-all duration-300 cursor-pointer overflow-hidden"
                          >
                            {/* Animated border shimmer */}
                            <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-transparent via-gray-600/50 to-transparent group-hover/skill:from-blue-400/80 group-hover/skill:via-purple-400/80 group-hover/skill:to-cyan-400/80 transition-all duration-300">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000 ease-out" />
                              <div className="h-full w-full rounded-lg bg-gray-900/80" />
                            </div>
                            
                            {/* Content */}
                            <span className="relative z-10 transition-all duration-200">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Meteors - Reduce number for better performance */}
                  <Meteors number={20} />

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }

        .hover\\:pause-scroll:hover {
          animation-play-state: paused;
        }

        /* Hides scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Optimize for smoother animations */
        .animate-scroll {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}