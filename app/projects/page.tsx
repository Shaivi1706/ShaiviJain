"use client"
import React, { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

// SpotlightCard Component
interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)"
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

// Projects data
const projects = [
  {
    title: "Equilibrium",
    image: "/equil.png",
    description: "AI-powered career assistant built with Next.js, get smart job recommendations, resume insights, and personalized upskilling.",
    list: ["Next.js", "Flask", "TailWindCSS", "PostgreSQL", "Gemini API"],
    code: "https://github.com/Shaivi1706/Equilibrium",
    demo: "https://equilibrium-64uw.vercel.app",
  },
  {
    title: "Osint",
    image: "/osint.png",
    "description": "A Python-powered OSINT (Open Source Intelligence) tool to search for people or entities on the web, aggregate results, extract named entities using NLP, and generate AI-powered summaries using Google Gemini.",
    list: ["React", "Next.js", "TailWindCSS", "Framer Motion"],
    code: "https://github.com/Shaivi1706/OSINT",
    demo: "https://osint-blue.vercel.app",
  },
  {
    title: "HealthEase",
    image: "/health.png",
    description: "A modern health management platform enabling patients and doctors to securely manage medical records and reports. Includes AI-powered symptom checker and integrated chatbot support.",
    list: ["Next.js", "Gemini API", "TailWindCSS"],
    code: "https://github.com/Shaivi1706/HealthEase",
    demo: "https://health-ease-five.vercel.app/",
  },
  {
    title: "InnerSpark",
    image: "/inner.png",
    description: "InnerSpark is a digital platform designed to support mental well-being by providing accessible tools for stress relief, emotional tracking, and personal growth.",
    list: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Shaivi1706/InnerSpark-Mental-Health",
    demo: "https://shaivi1706.github.io/InnerSpark-Mental-Health/",
  }
];

// ProjectCard Component
interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    description: string;
    list: string[];
    code: string;
    demo: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <SpotlightCard 
      className="h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] " 
      spotlightColor="rgba(147, 197, 253, 0.4)"
    >
      <div className="flex flex-col h-full">
        {/* Project Image */}
        <div className="w-full h-48  rounded-2xl mb-6 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold  mb-3 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-300 text-sm font-semibold leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.list.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-200 rounded-full border border-blue-800/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <Github size={18} />
            <span className="font-medium">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <ExternalLink size={18} />
            <span className="font-medium">Demo</span>
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
};

// Main Projects Page Component
export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center pt-8 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent drop-shadow-md tracking-wide animate-fade-in">
         <span className="inline-block mt-20 animate-glow">Projects</span>
       </h1>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}