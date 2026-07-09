import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Let the loader run for 3 seconds then fade out
    const timer = setTimeout(() => {
      setFade(true);
      const exitTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 800); // Allow fade-out animation to finish
      return () => clearTimeout(exitTimer);
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-[#070708] flex flex-col items-center justify-center transition-opacity duration-700 select-none ${
      fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      {/* Animation Stage */}
      <div className="relative w-full max-w-lg h-72 flex flex-col items-center justify-center overflow-hidden">
        
        {/* Falling/Flowing Ribbons */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(6)].map((_, i) => (
            <svg
              key={i}
              className={`absolute opacity-75`}
              style={{
                top: `-20px`,
                left: `${15 + i * 15}%`,
                width: '120px',
                height: '300px',
                animation: `ribbonFall ${2 + i * 0.4}s linear infinite`,
                animationDelay: `${i * 0.3}s`
              }}
              viewBox="0 0 100 300"
              fill="none"
            >
              <path
                d="M 10 0 C 40 50, -20 100, 30 150 C 80 200, 0 250, 50 300"
                stroke={i % 2 === 0 ? "#ef4444" : "#f97316"}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="300"
                strokeDashoffset="300"
                style={{
                  animation: 'drawRibbon 3s ease-in-out infinite'
                }}
              />
            </svg>
          ))}
        </div>

        {/* The Driving Thar Container */}
        <div className="relative flex flex-col items-center animate-bounce-gentle">
          
          {/* Thar Body Silhouette */}
          <div className="relative w-64 h-32 flex items-end justify-center">
            {/* Vector representation of a rugged Thar SUV */}
            <svg viewBox="0 0 300 120" className="w-64 h-auto drop-shadow-[0_15px_15px_rgba(239,68,68,0.2)]">
              {/* Main Body (Rugged offroader profile) */}
              <path 
                d="M10 90 L20 55 L55 52 L90 20 L195 20 L200 45 L250 50 L275 60 L285 75 L285 90 L260 90 L250 90 L235 90 C235 75, 195 75, 195 90 L105 90 C105 75, 65 75, 65 90 Z" 
                fill="#1c1c1e" 
                stroke="#ef4444" 
                strokeWidth="3.5"
              />
              {/* Roof rack / cage */}
              <path d="M92 20 L92 12 M190 20 L190 12 M92 12 L190 12" stroke="#ef4444" strokeWidth="2.5" fill="none" />
              {/* Windows */}
              <path d="M100 27 L140 27 L140 48 L100 48 Z" fill="#ef4444" opacity="0.15" />
              <path d="M148 27 L190 27 L187 48 L148 48 Z" fill="#ef4444" opacity="0.15" />
              {/* Front grill / headlamp highlights */}
              <circle cx="272" cy="68" r="5" fill="#fef08a" className="animate-pulse" />
              <rect x="280" y="65" width="5" height="10" fill="#f87171" />
              {/* Back spare tyre */}
              <circle cx="8" cy="62" r="16" fill="#111" stroke="#333" strokeWidth="2" />
              <circle cx="8" cy="62" r="8" fill="#222" />
            </svg>
          </div>

          {/* Rotating Wheels */}
          <div className="absolute bottom-[-1px] w-64 px-8 flex justify-between">
            {/* Rear Wheel */}
            <div className="w-11 h-11 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center animate-spin-fast shadow-md">
              {/* Wheel Spokes */}
              <div className="w-full h-1 bg-red-600"></div>
              <div className="w-full h-1 bg-red-600 rotate-90 absolute"></div>
              <div className="w-full h-1 bg-red-600 rotate-45 absolute"></div>
              <div className="w-full h-1 bg-red-600 -rotate-45 absolute"></div>
              <div className="w-4 h-4 rounded-full bg-black z-10"></div>
            </div>

            {/* Front Wheel */}
            <div className="w-11 h-11 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center animate-spin-fast shadow-md">
              {/* Wheel Spokes */}
              <div className="w-full h-1 bg-red-600"></div>
              <div className="w-full h-1 bg-red-600 rotate-90 absolute"></div>
              <div className="w-full h-1 bg-red-600 rotate-45 absolute"></div>
              <div className="w-full h-1 bg-red-600 -rotate-45 absolute"></div>
              <div className="w-4 h-4 rounded-full bg-black z-10"></div>
            </div>
          </div>

        </div>

        {/* Speed lines on road (Moving road effect) */}
        <div className="absolute bottom-16 w-80 h-1 overflow-hidden flex gap-8">
          <div className="w-16 h-full bg-zinc-800 rounded animate-roadLine"></div>
          <div className="w-16 h-full bg-zinc-800 rounded animate-roadLine" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-16 h-full bg-zinc-800 rounded animate-roadLine" style={{ animationDelay: '0.8s' }}></div>
        </div>

      </div>

      {/* Brand Text */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-3xl font-black tracking-widest uppercase bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
          DRANGO
        </span>
        <span className="text-[10px] tracking-[0.3em] font-semibold text-zinc-500 uppercase">
          Crafting Detailing Masterpieces...
        </span>
      </div>

      {/* Inject custom CSS keyframes */}
      <style>{`
        @keyframes drawRibbon {
          0% { stroke-dashoffset: 300; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -300; }
        }
        @keyframes ribbonFall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(300px) rotate(45deg);
            opacity: 0;
          }
        }
        .animate-bounce-gentle {
          animation: bounceGentle 0.4s ease-in-out infinite alternate;
        }
        @keyframes bounceGentle {
          0% { transform: translateY(0); }
          100% { transform: translateY(-3px); }
        }
        .animate-spin-fast {
          animation: spin 0.25s linear infinite;
        }
        .animate-roadLine {
          animation: roadLine 0.7s linear infinite;
          shrink: 0;
        }
        @keyframes roadLine {
          0% { transform: translateX(250px); }
          100% { transform: translateX(-150px); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
