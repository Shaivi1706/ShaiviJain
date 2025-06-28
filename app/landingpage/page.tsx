import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [moonExpanded, setMoonExpanded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Hi, I'm Shaivi Jain";
  const subtitle = "Crafting impactful digital experiences with precision, purpose, and passion. Explore a portfolio where design meets direction.";

  useEffect(() => {
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

  return (
    <div className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 md:pt-32">
      {/* Floating Code Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-300/20 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {['{ }', '< />', '&&', '||', '=>', '!=', '==', 'fn()', '[]', '++'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Main Moon Element */}
      <div 
        className={`relative transition-all duration-2000 ease-out ${
          moonExpanded 
            ? 'w-[500px] h-[500px] md:w-[700px] md:h-[700px]' 
            : 'w-12 h-12'
        }`}
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
              ? 'bg-gradient-radial from-slate-900/80 via-slate-800/60 to-transparent backdrop-blur-sm border border-blue-400/30' 
              : 'bg-blue-400'
          }`}
          style={{
            width: '100%',
            height: '100%',
            background: moonExpanded 
              ? 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0.8) 40%, rgba(15, 23, 42, 0.9) 100%)'
              : 'radial-gradient(circle, #60a5fa 0%, #3b82f6 100%)'
          }}
        >
          {/* Content Container */}
          {moonExpanded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              {/* Glowing Name */}
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent mb-4">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </h1>
                
                {/* Subtitle with delay */}
                <p 
                  className={`text-lg md:text-xl text-blue-200/80 max-w-2xl leading-relaxed transition-all duration-1000 ${
                    typedText === fullText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '1s' }}
                >
                  {subtitle}
                </p>
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
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-purple-950/20 pointer-events-none" />
    </div>
  );
};

export default LandingPage;