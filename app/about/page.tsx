"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex items-center justify-center px-6 py-16">
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-60"></div> */}
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      
      {/* Main Content Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative group"
        >
          {/* Animated background rings */}
          <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
          <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-30 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
          
          {/* Main image container */}
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            <Image
              src="/my-image.jpeg"
              alt="Shaivi Jain"
              width={400}
              height={400}
              className="relative z-10 w-full h-full rounded-full object-cover shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Glowing orb effect */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 lg:w-[28rem] lg:h-[28rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-full opacity-10 blur-3xl -z-10"></div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-2xl text-center lg:text-left"
        >
          <motion.h1 
            className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to my little corner of the internet, it's{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
              great to have you here!
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6 text-sm lg:text-[14px] leading-relaxed text-gray-700"
          >
            <p>
              I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-xl lg:text-2xl">
                Shaivi Jain
              </span>
              , a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                Computer Science (AI) student at IGDTUW
              </span>{" "}
              who's passionate about turning ideas into{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                intuitive digital experiences
              </span>
              . I spend most of my time diving into web development, designing sleek UIs, building meaningful platforms, and blending logic with creativity.
              
              <br/><br/>
              Alongside my love for clean frontends, I'm actively exploring the world of{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                Artificial Intelligence,
              </span>{" "}
               especially where it intersects with{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                ethical design and social impact
              </span>
              .

            <br/><br/>
              I'm also sharpening my{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-semibold">
                Data Structures & Algorithms
              </span>{" "}
              skills and participating in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                hackathons
              </span>
              , where I get to bring ambitious ideas to life under pressure.
            
            <br/><br/>
              I've worked on projects that range from{" "}
              <span className="bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent font-semibold">
                women-centric health platforms
              </span>{" "}
              to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                career guidance tools
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent font-semibold">
                volunteer matchmaking systems,
              </span>{" "}
              because I believe tech should{" "}
              <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent font-bold italic">
                do good
              </span>
              .
            
            <br/><br/>
              Outside of code, I'm probably nose-deep in a{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                novel
              </span>
              , geeking out over{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                space
              </span>
              , or dreaming up my next big project.
            
              The universe reminds me that there's always more to learn, more to build, and more to imagine{" "}
              <span className="inline-block animate-pulse text-2xl">🌌</span>
            
            <br/>
              If you're into{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                thoughtful tech
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-pink-600 to-red-500 bg-clip-text text-transparent font-semibold">
                purpose-driven design
              </span>
              , or just good conversation — let's connect.{" "}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex gap-6 justify-center lg:justify-start mt-10 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/ShaiviJain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-gray-900 to-black text-white px-10 py-4 rounded-2xl font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 inline-flex items-center gap-3 text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">View Resume</span>
            </a>
            <a
              href="mailto:shaivicseai@gmail.com"
              className="group relative border-3 border-gray-900 text-gray-900 px-10 py-4 rounded-2xl font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 inline-flex items-center gap-3 text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Me</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}