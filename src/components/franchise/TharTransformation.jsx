import React, { useState } from 'react';
import { Sliders, Sparkles, Shield, CheckCircle } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

const TharTransformation = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-850 rounded-3xl p-6 md:p-10 shadow-2xl space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <Sparkles size={14} />
          <span>SIGNATURE CRAFTSMANSHIP</span>
        </span>
        <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
          STOCK VS DRANGO THAR EDITION
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm">
          Drag the interactive slider to see how Drango transforms standard showroom Thars into high-margin monster builds.
        </p>
      </div>

      {/* Interactive Drag Slider Stage */}
      <div 
        className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-800 select-none cursor-ew-resize group"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (!isDragging && e.buttons !== 1) return;
          const rect = e.currentTarget.getBoundingClientRect();
          handleMove(e.clientX, rect);
        }}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          handleMove(e.touches[0].clientX, rect);
        }}
      >
        {/* Before Image: Stock Factory Thar */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/mahindra_thar_roxx_front.png" 
            alt="Stock Mahindra Thar Factory"
            className="w-full h-full object-cover filter brightness-75 grayscale-[30%]"
          />
          <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur border border-zinc-800 text-zinc-300 font-mono text-xs px-3 py-1.5 rounded-full font-bold uppercase">
            Factory Stock Thar
          </div>
        </div>

        {/* After Image: Drango Award Detailing Build (Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <img 
            src="/thar_3d_showroom.png" 
            alt="Drango Armor Detailed Thar"
            className="w-full h-full object-cover filter brightness-110 contrast-105"
          />
          <div className="absolute top-4 left-4 bg-red-600 text-white font-mono text-xs px-3 py-1.5 rounded-full font-bold uppercase shadow-lg shadow-red-600/40">
            ★ Drango Award Edition
          </div>
        </div>

        {/* Divider Handle Bar */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-red-600 border-2 border-white rounded-full flex items-center justify-center text-white shadow-xl">
            <Sliders size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TharTransformation;
