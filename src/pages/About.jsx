import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Cpu, Zap, Award, Flame, Eye, Compass, ChevronRight, CheckCircle2, Volume2, ArrowRight } from 'lucide-react';
import PorschePreloader from '../components/about/PorschePreloader';
import PorscheMenuDrawer from '../components/about/PorscheMenuDrawer';
import PorscheHeroStage from '../components/about/PorscheHeroStage';
import PorscheEquipmentSection from '../components/about/PorscheEquipmentSection';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

const BLACK_EDITION_CARDS = [
  {
    id: 'stealth-card',
    title: 'THAR ROXX STEALTH OBSIDIAN',
    subtitle: 'Pure Satin Matte Black Paint Protection Film & Blackout Grille',
    image: '/thar_roxx_black_edition.png',
    badge: 'BLACK EDITION 01',
    hp: '172 BHP',
    zeroToHundred: '9.8s',
    topSpeed: '165 km/h'
  },
  {
    id: 'platinum-card',
    title: 'THAR ROXX PLATINUM SPEC',
    subtitle: 'Dual-Layer 9H Graphene Shield with Brushed Aluminum Wheels',
    image: '/thar_roxx_clean_studio.png',
    badge: 'BLACK EDITION 02',
    hp: '175 BHP',
    zeroToHundred: '9.5s',
    topSpeed: '170 km/h'
  },
  {
    id: 'crimson-card',
    title: 'THAR ROXX DRAGON CRIMSON',
    subtitle: 'Gloss Red Metallic Wrap with Off-Road Bumper & Roof Bar',
    image: '/thar_red_clean_studio.png',
    badge: 'BLACK EDITION 03',
    hp: '180 BHP',
    zeroToHundred: '9.2s',
    topSpeed: '172 km/h'
  },
  {
    id: 'gold-card',
    title: 'THAR ROXX CYBER GOLD',
    subtitle: 'Overland Expedition Rig with High-Flow Snorkel & Lift Kit',
    image: '/thar_hero_ranger_style.png',
    badge: 'BLACK EDITION 04',
    hp: '170 BHP',
    zeroToHundred: '10.1s',
    topSpeed: '160 km/h'
  }
];

const About = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCardIdx, setActiveCardIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040405] text-white font-sans selection:bg-red-600 selection:text-white overflow-hidden">
      {/* PORSCHE STYLE BLACK PRELOADER */}
      <PorschePreloader />

      {/* 8-ANGLE DESIGN GALLERY DRAWER */}
      <PorscheMenuDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 space-y-20 md:space-y-32 pb-24">
        {/* FULL WIDTH PORSCHE HERO SECTION (NO CONTAINER CONSTRAINTS, NO CONTENT ABOVE) */}
        <section className="w-full max-w-none p-0 pt-0 select-none">
          <PorscheHeroStage onOpenGallery={() => setDrawerOpen(true)} />
        </section>

        {/* PORSCHE-STYLE EQUIPMENT & SPECIFICATION SECTION */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <PorscheEquipmentSection />
        </section>

        {/* FOUR BLACK EDITION CARDS */}
        <section className="py-12 max-w-7xl mx-auto px-4 md:px-8 space-y-12 border-t border-zinc-900">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-[0.2em]">
              EXCLUSIVITY SERIES
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
              THE THAR ROXX BLACK CARDS
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm">
              Select a Black Edition model card to inspect custom armor packages, performance specs, and detailing finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLACK_EDITION_CARDS.map((card, idx) => {
              const isAct = activeCardIdx === idx;
              return (
                <div
                  key={card.id}
                  onClick={() => {
                    playClickSound();
                    setActiveCardIdx(idx);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`bg-zinc-900/90 border rounded-3xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-6 group ${
                    isAct 
                      ? 'border-red-600 shadow-[0_15px_35px_rgba(239,68,68,0.3)] scale-[1.03]' 
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span className="bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-full">{card.badge}</span>
                      <span className="text-red-500 font-bold">{card.hp}</span>
                    </div>

                    {/* Thar Image Stage */}
                    <div className="relative aspect-[16/10] bg-zinc-950 rounded-2xl overflow-hidden p-2 flex items-center justify-center">
                      <div className="absolute bottom-2 left-4 right-4 h-3 bg-black/80 rounded-full blur-sm" />
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-black uppercase text-white group-hover:text-red-500 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
                    <div className="font-mono text-[11px] text-zinc-400">
                      0-100: <span className="text-white font-bold">{card.zeroToHundred}</span>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] uppercase tracking-widest px-3.5 py-2 rounded-xl transition flex items-center gap-1">
                      <span>Inspect</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* DRANGO HISTORY & BRAND STORY */}
        <section className="py-12 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest">
                OUR LEGACY
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wide text-white">
                THE PURSUIT OF AUTOMOTIVE PERFECTION
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Founded by Sachin and Lalit Choudhary, Drango set out to dismantle cheap, low-grade polishing shortcuts in India by introducing genuine global paint protection standards.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                By combining high-tech TPU self-healing films, custom dust-free detailing bays, and personal passion for the iconic Mahindra Thar, Drango grew into a nationwide phenomenon with over 45+ outlets and 2.3M+ YouTube subscribers.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
                  <span className="text-2xl font-black text-white font-mono block">45+</span>
                  <span className="text-xs text-zinc-400 uppercase">Franchise Hubs</span>
                </div>
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl">
                  <span className="text-2xl font-black text-red-500 font-mono block">10,000+</span>
                  <span className="text-xs text-zinc-400 uppercase">Thar Builds Completed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
                <img 
                  src="/thar_3d_showroom.png" 
                  alt="Drango Detailing Garage" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-900/90 backdrop-blur border border-zinc-800 rounded-2xl">
                  <span className="text-xs font-bold text-white uppercase block">Drango Master Detailing Bay</span>
                  <span className="text-[11px] text-zinc-400">Dust-Free Climate Controlled Facility</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
