"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex items-center justify-center px-6 py-16 min-h-screen relative">
      {/* Cosmic floating elements that match your background theme */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30 blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-16 w-12 h-12 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-25 blur-lg animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-full opacity-20 blur-2xl animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-25 blur-xl animate-pulse delay-1500"></div>
      
      {/* Twinkling stars scattered around */}
      <div className="absolute top-16 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
      <div className="absolute top-24 right-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse delay-700 opacity-70"></div>
      <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-1200 opacity-75"></div>
      <div className="absolute top-40 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-300 opacity-80"></div>
      
      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10">
        
        {/* Profile Image with cosmic styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative group"
        >
          {/* Cosmic rings matching your background aurora */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 rounded-full opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
          
          {/* Main image container with celestial glow */}
          {/* <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-70 group-hover:opacity-80 transition-opacity duration-500 shadow-2xl shadow-blue-500/50"></div>
            <Image
              src="/my-image.jpeg"
              alt="Shaivi Jain"
              width={400}
              height={400}
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white/80 group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-cyan-500/30"
            />
          </div> */}
          
          {/* Large cosmic glow effect */}
          {/* <div className="absolute top-1/2 left-1/2 w-96 h-96 lg:w-[30rem] lg:h-[30rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-full opacity-15 blur-3xl -z-10 animate-pulse"></div> */}
        </motion.div>

        {/* About Content with cosmic text styling */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-5xl text-center lg:text-left"
        >
          <motion.h1 
            className="text-2xl lg:text-3xl xl:text-4xl mt-6 font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight animate-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to my little corner of the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-extrabold animate-glow">
              universe, it&apos;s great to have you here!
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4 text-sm lg:text-[14px] leading-relaxed text-gray-200 backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/10"
          >
            <p>
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-bold text-xl lg:text-2xl animate-glow">
                Shaivi Jain
              </span>
              , a{" "}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                Computer Science (AI) student at IGDTUW
              </span>{" "}
              who&apos;s passionate about turning ideas into{" "}
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                intuitive digital experiences
              </span>
              . I spend most of my time diving into web development, designing sleek UIs, building meaningful platforms, and blending logic with creativity.
              
              <br/><br/>
              Alongside my love for clean frontends, I&apos;m actively exploring the world of{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold">
                Artificial Intelligence,
              </span>{" "}
               especially where it intersects with{" "}
              <span className="bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent font-semibold">
                ethical design and social impact
              </span>
              .

            <br/><br/>
              I&apos;m also sharpening my{" "}
              <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent font-semibold">
                Data Structures & Algorithms
              </span>{" "}
              skills and participating in{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
                hackathons
              </span>
              , where I get to bring ambitious ideas to life under pressure.
            
            <br/><br/>
              I&apos;ve worked on projects that range from{" "}
              <span className="bg-gradient-to-r from-pink-300 to-red-300 bg-clip-text text-transparent font-semibold">
                women-centric health platforms
              </span>{" "}
              to{" "}
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent font-semibold">
                career guidance tools
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-semibold">
                volunteer matchmaking systems,
              </span>{" "}
              because I believe tech should{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold italic animate-glow">
                do good
              </span>
              .
            
            <br/><br/>
              Outside of code, I&apos;m probably nose-deep in a{" "}
              <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                novel
              </span>
              , geeking out over{" "}
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent font-semibold">
                space
              </span>
              , or dreaming up my next big project.
            
              The universe reminds me that there&apos;s always more to learn, more to build, and more to imagine{" "}
              <span className="inline-block animate-pulse text-2xl">🌌</span>
            
            <br/>
              If you&apos;re into{" "}
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
                thoughtful tech
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-pink-300 to-red-300 bg-clip-text text-transparent font-semibold">
                purpose-driven design
              </span>
              , or just good conversation — let&apos;s connect.{" "}
            </p>
          </motion.div>

          {/* Cosmic-styled buttons */}
          <motion.div 
            className="flex gap-6 justify-center lg:justify-start mt-10 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://drive.google.com/file/d/1fEeQyKf0ZtkxnNtKRQX3xqVxQVEAlYgs/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-semibold overflow-hidden shadow-2xl shadow-blue-500/50 hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 inline-flex items-center gap-3 text-lg border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 animate-glow">View Resume</span>
            </a>
            <a
              href="#contact"
              className="group relative border-2 border-cyan-400/60 text-cyan-200 px-10 py-4 rounded-2xl font-semibold overflow-hidden shadow-2xl shadow-cyan-500/30 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 inline-flex items-center gap-3 text-lg backdrop-blur-sm bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 animate-glow">Contact Me</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}