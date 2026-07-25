import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

const VEHICLES = [
  {
    id: 'thar-roxx',
    tag: 'START YOUR BUILD',
    title: 'MAHINDRA THAR ROXX',
    modelName: 'Thar Roxx (5-Door)',
    subtitle: 'Find compatible Barricade off-road bumpers, armor PPF shields & ceramic coatings for this vehicle',
    image: '/thar_roxx_clean_studio.png',
    badge: 'NEW 2026 ROXX',
    productsCount: '48 Products',
    accentColor: '#ef4444',
    features: ['Winch Bumper Compatible', 'TPU Self-Healing PPF', '2.2L mHawk Diesel Spec']
  },
  {
    id: 'thar-stealth',
    tag: 'START YOUR BUILD',
    title: 'MAHINDRA THAR STEALTH BLACK',
    modelName: 'Thar Stealth Armor',
    subtitle: 'Equip your Thar with Barricade 200-micron self-healing TPU film, smoked DRLs and skid plates',
    image: '/thar_3d_showroom.png',
    badge: 'STEALTH EDITION',
    productsCount: '36 Products',
    accentColor: '#18181b',
    features: ['Matte Black Protection', 'Smoked LED Matrix DRLs', 'Underbody Skid Armor']
  },
  {
    id: 'thar-red',
    tag: 'START YOUR BUILD',
    title: 'MAHINDRA THAR RED EDITION',
    modelName: 'Thar Dragon Red 4x4',
    subtitle: 'High-gloss metallic dragon red Thar build with 9H Graphene ceramic shield and custom beast alloys',
    image: '/thar_red_clean_studio.png',
    badge: 'DRAGON RED 4X4',
    productsCount: '52 Products',
    accentColor: '#dc2626',
    features: ['9H Graphene Coating', 'Beast R20 Alloy Wheels', 'Off-Road Lift Package']
  },
  {
    id: 'thar-earth',
    tag: 'START YOUR BUILD',
    title: 'MAHINDRA THAR EARTH 4X4',
    subtitle: 'Heavy-duty off-road recovery gear, custom lift kits, and all-terrain interior protection mats',
    image: '/thar_hero_ranger_style.png',
    badge: 'EARTH OVERLAND',
    productsCount: '42 Products',
    accentColor: '#ca8a04',
    features: ['Desert Overland Rig', 'High-Flow Snorkel System', 'Heavy Duty Roof Rack']
  }
];

const BarricadeHeroSlideshow = ({ onSelectCategory }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % VEHICLES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = VEHICLES[currentIdx];

  const handleSelectCard = (index) => {
    playClickSound();
    setCurrentIdx(index);
  };

  return (
    <div
      className="space-y-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* MAIN HERO CARD (Matching Screenshot with Realistic Floor Shadow) */}
      <div className="relative w-full bg-white text-zinc-950 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden border border-zinc-200 group select-none">
        {/* Background Subtle Gradient Flare */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] md:min-h-[440px]">
          {/* Left Side Info & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-red-600 font-black tracking-widest text-xs md:text-sm uppercase font-mono block">
              {slide.tag}
            </span>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-zinc-950 tracking-tight leading-[1.05] transition-all duration-300">
                {slide.title}
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-lg">
                {slide.subtitle}
              </p>
            </div>

            {/* Action Buttons (Matching Screenshot) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  playClickSound();
                  const target = document.getElementById('barricade-products-grid');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={playHoverSound}
                className="bg-black hover:bg-zinc-800 text-white font-bold text-xs md:text-sm tracking-wider uppercase px-7 py-4 rounded-xl transition-all duration-300 shadow-xl active:scale-95 flex items-center gap-2"
              >
                <span>Start Your Build</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  const target = document.getElementById('barricade-products-grid');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={playHoverSound}
                className="bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-900 font-bold text-xs md:text-sm tracking-wider uppercase px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow active:scale-95"
              >
                <span>Find Yours</span>
                <ArrowRight size={16} className="text-red-600" />
              </button>
            </div>

            {/* Slider Dots (Matching Screenshot: ■ ■ ■ ■) */}
            <div className="pt-6 flex items-center gap-2">
              {VEHICLES.map((_, idx) => {
                const isActive = currentIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectCard(idx)}
                    onMouseEnter={playHoverSound}
                    className={`h-2.5 transition-all duration-300 rounded-sm ${isActive
                      ? 'w-7 bg-black shadow'
                      : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
                      }`}
                    aria-label={`Select vehicle ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Side Vehicle Cutout with Hyperrealistic Floor Contact Shadow */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[300px] md:min-h-[380px]">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-zinc-100 border border-zinc-200 text-zinc-800 font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm z-20">
              {slide.badge}
            </div>

            {/* Car Stage Container */}
            <div className="relative w-full max-w-[560px] aspect-[16/10] flex items-center justify-center">
              {/* REALISTIC BLACK FLOOR CONTACT SHADOW (Directly under the wheels/car body) */}
              <div className="absolute bottom-[8%] left-[10%] right-[10%] h-[35px] bg-black/60 rounded-[100%] blur-xl pointer-events-none transform scale-y-50 z-0" />
              <div className="absolute bottom-[10%] left-[15%] right-[15%] h-[18px] bg-black/85 rounded-[100%] blur-md pointer-events-none transform scale-y-40 z-0" />

              {/* Main Thar Car Cutout Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] transition-all duration-700 transform group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FOUR VEHICLE BUILD CARDS GRID (Below the main section) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {VEHICLES.map((item, idx) => {
          const isSelected = currentIdx === idx;
          return (
            <div
              key={item.id}
              onClick={() => handleSelectCard(idx)}
              onMouseEnter={playHoverSound}
              className={`relative bg-zinc-900 border rounded-2xl p-4 cursor-pointer transition-all duration-300 flex flex-col justify-between group overflow-hidden ${isSelected
                ? 'border-red-600 bg-zinc-900/95 ring-2 ring-red-600/50 shadow-[0_10px_30px_rgba(239,68,68,0.25)] scale-[1.02]'
                : 'border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850'
                }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-500 animate-ping" />
              )}

              {/* Card Image Stage */}
              <div className="relative aspect-[16/10] bg-zinc-950 rounded-xl overflow-hidden p-2 flex items-center justify-center mb-3">
                {/* Realistic Contact Shadow under card thumbnail */}
                <div className="absolute bottom-2 left-4 right-4 h-3 bg-black/80 rounded-full blur-sm" />
                <img
                  src={item.image}
                  alt={item.modelName}
                  className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Title & Info */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>{item.badge}</span>
                  <span className="text-red-400 font-bold">{item.productsCount}</span>
                </div>
                <h4 className="text-sm font-black text-white uppercase line-clamp-1 group-hover:text-red-500 transition-colors">
                  {item.modelName}
                </h4>
              </div>

              {/* Card Active Indicator Bar */}
              <div className="mt-3 pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px]">
                <span className={`font-mono text-[10px] uppercase ${isSelected ? 'text-red-400 font-bold' : 'text-zinc-500'}`}>
                  {isSelected ? '★ Active Build' : 'Click to View'}
                </span>
                <ArrowRight size={12} className={`transition-transform ${isSelected ? 'text-red-500 translate-x-1' : 'text-zinc-500'}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarricadeHeroSlideshow;
