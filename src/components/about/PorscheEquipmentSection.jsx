import React, { useState } from 'react';
import { ChevronRight, Shield, Zap, Sparkles, Cpu, Eye, CheckCircle2 } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

const EQUIPMENT_ITEMS = [
  {
    id: 'lights',
    title: 'Smoked Laser Matrix LED Headlamps',
    subtitle: 'Signature Lighting System',
    category: 'LIGHTING & DESIGN',
    desc: 'High-intensity smoked laser projector headlamps with integrated C-shaped DRLs providing supreme night trail vision.',
    image: '/thar_roxx_black_edition.png',
    spec: 'Matrix LED Spec'
  },
  {
    id: 'engine',
    title: '2.2L mHawk Turbocharged Diesel',
    subtitle: 'High-Torque 4X4 Powertrain',
    category: 'PERFORMANCE & 4WD',
    desc: '172 BHP and 370 Nm of peak torque paired with 6-speed automatic torque converter transmission and terrain response control.',
    image: '/thar_roxx_clean_studio.png',
    spec: '172 BHP / 370 Nm'
  },
  {
    id: 'ppf',
    title: '200-Micron Satin Matte TPU Armor',
    subtitle: 'Self-Healing Paint Protection',
    desc: 'Hydrophobic satin matte finish that self-heals surface swirls and trail scratches under ambient sunlight heat.',
    image: '/thar_3d_showroom.png',
    spec: 'Satin TPU Film'
  },
  {
    id: 'interior',
    title: 'Quilted Black Nappa Leather Lounge',
    subtitle: 'Porsche-Spec Cabin Craftsmanship',
    desc: 'Handcrafted black Nappa leather seats with crimson stitching, acoustic sound dampening insulation, and ambient LEDs.',
    image: '/thar_detailing_franchise.png',
    spec: 'Nappa Leathercraft'
  }
];

const PorscheEquipmentSection = () => {
  const [selectedEq, setSelectedEq] = useState(EQUIPMENT_ITEMS[0]);

  return (
    <div className="space-y-12 select-none">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2">
          <Sparkles size={14} />
          <span>EQUIPMENT & CRAFTSMANSHIP</span>
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
          EXCLUSIVE BLACK EQUIPMENT
        </h2>
        <p className="text-zinc-400 text-xs md:text-sm">
          Explore the bespoke automotive components engineered for the Drango Mahindra Thar Roxx Black Edition.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Equipment Selector Cards Column */}
        <div className="lg:col-span-6 space-y-4">
          {EQUIPMENT_ITEMS.map((item) => {
            const isActive = selectedEq.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => {
                  playClickSound();
                  setSelectedEq(item);
                }}
                onMouseEnter={playHoverSound}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                  isActive
                    ? 'bg-zinc-900 border-red-500 shadow-[0_10px_30px_rgba(239,68,68,0.25)] scale-[1.02]'
                    : 'bg-zinc-950 border-zinc-850 hover:border-zinc-700'
                }`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest block">
                    {item.category}
                  </span>
                  <h3 className="text-base md:text-lg font-black uppercase text-white group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">{item.subtitle}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-full hidden sm:inline-block">
                    {item.spec}
                  </span>
                  <ChevronRight size={18} className={isActive ? 'text-red-500' : 'text-zinc-600'} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Equipment Showcase Stage */}
        <div className="lg:col-span-6 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">
              COMPONENT SPECIFICATION
            </span>
            <span className="text-xs font-bold text-white bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">
              {selectedEq.spec}
            </span>
          </div>

          <div className="relative aspect-[16/10] bg-black rounded-2xl overflow-hidden p-2 flex items-center justify-center">
            <div className="absolute bottom-2 left-6 right-6 h-4 bg-black/80 rounded-full blur-md" />
            <img 
              src={selectedEq.image} 
              alt={selectedEq.title}
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black uppercase text-white">{selectedEq.title}</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">{selectedEq.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorscheEquipmentSection;
