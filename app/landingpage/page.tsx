"use client"
import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [moonExpanded, setMoonExpanded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const fullText = "Hi, I'm Shaivi";
  const subtitle = "Crafting impactful digital experiences with precision, purpose, and passion. Explore a portfolio where design meets direction.";

  // Deterministic random values to prevent hydration mismatch
  const codeParticles = Array.from({ length: 12 }, (_, i) => ({
    left: (i * 7 + 13) % 100,
    top: (i * 11 + 7) % 100,
    delay: (i * 0.3) % 3,
    duration: 3 + (i % 3),
    symbol: ['{ }', '< />', '&&', '||', '=>', '!=', '==', 'fn()', '[]', '++'][i % 10]
  }));

  const moonParticles = Array.from({ length: 20 }, (_, i) => ({
    top: (i * 13 + 17) % 100,
    left: (i * 19 + 23) % 100,
    delay: (i * 0.15) % 3,
    duration: 2 + (i % 3)
  }));

  useEffect(() => {
    // Set client-side flag to prevent hydration mismatch
    setIsClient(true);
    
    // Start moon expansion after component mounts
    const moonTimer = setTimeout(() => {
      setMoonExpanded(true);
    }, 500);

    // Start text animation after moon expands
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 1500);

    return () => {
      clearTimeout(moonTimer);
      clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    if (textVisible) {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 100);

      return () => clearInterval(typeTimer);
    }
  }, [textVisible]);

  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Scroll to projects section or handle navigation
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no projects section exists, you can add custom logic here
      console.log('Navigate to projects');
    }
  };

  return (
    <div className="relative min-h-screen flex top-16 justify-center overflow-hidden">
      {/* Floating Code Particles */}
      {isClient && (
        <div
          className="absolute inset-0"
          style={{ pointerEvents: 'none', zIndex: 1 }}
        >
          {codeParticles.map((particle, i) => (
            <div
              key={i}
              className="absolute text-blue-300/20 text-xs font-mono animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            >
              {particle.symbol}
            </div>
          ))}
        </div>
      )}

      {/* Main Moon Element */}
      <div
        className={`relative transition-all duration-2000 ease-out ${
          moonExpanded
            ? 'w-[350px] h-[350px] md:w-[500px] md:h-[500px]'
            : 'w-12 h-12'
        }`}
        style={{ zIndex: 5 }}
      >
        {/* Moon Glow */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-2000 ease-out ${
            moonExpanded
              ? 'bg-gradient-radial from-blue-400/30 via-purple-500/20 to-transparent blur-xl'
              : 'bg-blue-400/50 blur-sm'
          }`}
          style={{
            background: moonExpanded
              ? 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(96, 165, 250, 0.8) 0%, transparent 70%)'
          }}
        />

        {/* Moon Surface */}
        <div
          className={`relative rounded-full transition-all duration-2000 ease-out overflow-hidden ${
            moonExpanded
              ? 'bg-gradient-radial from-slate-900/80 via-slate-800/60 to-transparent backdrop-blur-sm'
              : 'bg-blue-400'
          }`}
          style={{
            width: '100%',
            height: '100%',
            background: moonExpanded
              ? 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0.8) 40%, rgba(15, 23, 42, 0.9) 100%)'
              : 'radial-gradient(circle, #60a5fa 0%, #3b82f6 100%)',
            pointerEvents: 'auto',
            zIndex: 40,
            // Enhanced double border effect
            border: moonExpanded 
              ? '2px solid transparent'
              : 'none',
            backgroundClip: moonExpanded ? 'padding-box' : 'border-box',
            boxShadow: moonExpanded 
              ? `
                0 0 0 1px rgba(96, 165, 250, 0.4),
                0 0 0 3px rgba(147, 51, 234, 0.3),
                0 0 20px rgba(96, 165, 250, 0.2),
                inset 0 0 20px rgba(59, 130, 246, 0.1)
              `
              : 'none'
          }}
        >
          {/* Content Container */}
          {moonExpanded && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8"
              style={{
                pointerEvents: 'auto',
                zIndex: 50, // way high to be safe
              }}
            >


              {/* Glowing Name */}
              <div className="text-center mb-2 md:mb-4 lg:mb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-3 md:mb-4">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </h1>
                
                {/* Subtitle with delay */}
                <p
                  className={`text-sm md:text-xl text-blue-200/80 max-w-xs md:max-w-2xl leading-relaxed transition-all duration-1000 px-2 ${
                    typedText === fullText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '1s' }}
                >
                  {subtitle}
                </p>

                {/* Gradient Explore Button */}
                <button
                  onClick={handleExploreClick}
                  className={`mt-4 md:mt-8  inline-block px-4 md:px-6 py-2 text-sm md:text-base text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 ${
                    typedText === fullText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '1.5s', position: 'relative', zIndex: 10 }}
                >
                  Explore My Work
                </button>

                {/* Social Icons */}
               <div 
                  className="mt-4 md:mt-6 flex gap-4 md:gap-6 justify-center transition-all duration-1000"
                  style={{ transitionDelay: '2s', position: 'relative', zIndex: 10 }}
                >
                  {/* GitHub */}
                  <a
                    href="https://github.com/Shaivi1706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 cursor-pointer relative z-50"
                    aria-label="GitHub Profile"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.stopPropagation();
                      window.open('https://github.com/Shaivi1706', '_blank');
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 md:w-6 md:h-6 pointer-events-auto"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.07c-3.2.7-3.87-1.5-3.87-1.5-.52-1.31-1.27-1.66-1.27-1.66-1.04-.7.08-.68.08-.68 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.99.01 1.98.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.62 1.6.24 2.78.12 3.07.74.82 1.18 1.86 1.18 3.12 0 4.44-2.7 5.42-5.27 5.7.41.35.78 1.03.78 2.09v3.1c0 .31.2.67.8.56A10.99 10.99 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/shaivijain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 cursor-pointer relative z-50"
                    aria-label="LinkedIn Profile"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.stopPropagation();
                      window.open('https://www.linkedin.com/in/shaivi-jain/', '_blank');
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 md:w-6 md:h-6 pointer-events-auto"
                    >
                      <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8S5.5 4.1 6.5 4.1s1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.4c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.1-.1.3-.1.6-.1.9v5.6h-3s.1-9.2 0-10h3v1.4c.4-.6 1-1.4 2.5-1.4 1.8 0 3.1 1.2 3.1 3.8v6.2z"/>
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="https://twitter.com/shaivijain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 cursor-pointer relative z-50"
                    aria-label="Twitter Profile"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://x.com/ShaiviJain17', '_blank');
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 md:w-6 md:h-6 pointer-events-auto"
                    >
                      <path d="M22.46 6c-.77.35-1.5.59-2.24.69.81-.48 1.4-1.24 1.68-2.15-.76.44-1.6.76-2.5.93a4.48 4.48 0 00-7.7 4.08A12.7 12.7 0 013 4.79a4.48 4.48 0 001.39 5.98c-.67-.02-1.3-.2-1.85-.5v.05a4.5 4.5 0 003.6 4.4 4.55 4.55 0 01-2.03.08 4.49 4.49 0 004.2 3.12A9 9 0 012 19.54a12.73 12.73 0 006.91 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.4-.01-.6A9.16 9.16 0 0024 5.4a9.05 9.05 0 01-2.54.7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Moon Surface Details (when expanded) */}
          {moonExpanded && (
            <>
              {/* Crater effects */}
              <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-slate-700/40 rounded-full blur-sm" />
              <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-slate-700/30 rounded-full blur-sm" />
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-slate-700/50 rounded-full blur-sm" />
              
              {/* Particle effects around moon */}
              {moonParticles.map((particle, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
                  style={{
                    top: `${particle.top}%`,
                    left: `${particle.left}%`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.duration}s`
                  }}
                />
              ))}
            </>
          )}
        </div>

        {/* Orbital Rings */}
        {moonExpanded && (
          <>
            <div className="absolute inset-0 border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </>
        )}
      </div>

      {/* Background Enhancement */}
      <div
      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-purple-950/20"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />

    </div>
  );
};

export default LandingPage;