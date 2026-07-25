import React, { useEffect, useState } from 'react';

const PorschePreloader = () => {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setHidden(true), 600); // Remove from DOM after fade out
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-600 ease-out select-none ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Brand Crest / Logo */}
        <div className="text-center space-y-2 animate-pulse">
          <span className="text-[10px] font-mono font-bold tracking-[0.35em] text-red-500 uppercase block">
            DRANGO EDITION
          </span>
          <h2 className="text-2xl font-black uppercase text-white tracking-widest">
            MAHINDRA THAR ROXX
          </h2>
          <span className="text-[11px] font-mono text-zinc-500 tracking-[0.2em] block">
            BLACK EDITION
          </span>
        </div>

        {/* Porsche Style Spinner Ring */}
        <div className="w-10 h-10 relative">
          <div className="w-full h-full border-2 border-white/10 border-t-red-600 rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default PorschePreloader;
