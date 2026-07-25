import React, { useState } from 'react';
import { X, ChevronRight, Eye, Sparkles, Shield, Maximize2 } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

const GALLERY_ANGLES = [
  {
    num: '01',
    title: 'Laser Matrix Front Grille',
    subtitle: 'Smoked Blackout LED DRLs',
    desc: 'High-intensity smoked laser projector headlights with signature C-shaped Daytime Running Lights.',
    image: '/thar_roxx_black_edition.png'
  },
  {
    num: '02',
    title: 'Stealth Satin TPU PPF',
    subtitle: 'Self-Healing Paint Armor',
    desc: 'Proprietary 200-micron self-healing satin matte paint protection film engineered for extreme off-road trail protection.',
    image: '/thar_3d_showroom.png'
  },
  {
    num: '03',
    title: 'Dragon Red Metallic Finish',
    subtitle: 'Dual-Layer Ceramic Coat',
    desc: 'Deep glossy crimson metallic paint finish with 9H Graphene hydrophobic ceramic shield.',
    image: '/thar_red_clean_studio.png'
  },
  {
    num: '04',
    title: 'Cyber Gold Overland Rig',
    subtitle: 'Expedition Package',
    desc: 'Heavy-duty roof rack, high-flow snorkel, and 3-inch off-road suspension lift kit.',
    image: '/thar_hero_ranger_style.png'
  },
  {
    num: '05',
    title: 'Custom Beast R20 Rims',
    subtitle: 'All-Terrain Mud Tires',
    desc: '20-inch matte black alloy wheels wrapped in aggressive mud-terrain off-road rubber.',
    image: '/mahindra_thar_roxx_front.png'
  },
  {
    num: '06',
    title: 'Quilted Nappa Leather Lounge',
    subtitle: 'Porsche-Spec Interior',
    desc: 'Handcrafted black leather upholstery with crimson contrast stitching and ambient LED lighting.',
    image: '/thar_detailing_franchise.png'
  },
  {
    num: '07',
    title: 'mHawk 4X4 Powertrain',
    subtitle: '172 BHP / 370 Nm',
    desc: 'Torque-on-demand 4WD system with mechanical locking rear differential for unyielding traction.',
    image: '/thar_roxx_clean_studio.png'
  },
  {
    num: '08',
    title: 'Underbody Steel Skid Plate',
    subtitle: 'Full Trail Armor',
    desc: '4mm thick laser-cut steel armor protecting oil pan, transfer case, and fuel tank.',
    image: '/thar_roxx_black_edition.png'
  }
];

const PorscheMenuDrawer = ({ isOpen, onClose }) => {
  const [selectedAngle, setSelectedAngle] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9990] bg-black/90 backdrop-blur-2xl flex justify-end animate-in fade-in duration-300 select-none">
      {/* Backdrop overlay click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-in Drawer Container */}
      <div className="relative w-full max-w-2xl bg-[#09090b] border-l border-zinc-800 h-full p-6 md:p-10 overflow-y-auto z-10 flex flex-col justify-between space-y-8 shadow-2xl">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-zinc-850 pb-6">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-red-500 uppercase block">
              DESIGN GALLERY (01-08)
            </span>
            <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-widest">
              THAR ROXX BLACK ANGLES
            </h3>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-red-600 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* 8 Angle Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GALLERY_ANGLES.map((item) => (
            <div
              key={item.num}
              onClick={() => {
                playClickSound();
                setSelectedAngle(item);
              }}
              onMouseEnter={playHoverSound}
              className="bg-zinc-950 border border-zinc-850 hover:border-red-600/60 p-4 rounded-2xl cursor-pointer transition-all duration-300 group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="text-red-500 font-bold font-mono">{item.num}</span>
                <span>{item.subtitle}</span>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-[16/10] bg-black rounded-xl overflow-hidden p-1 flex items-center justify-center">
                <div className="absolute bottom-1 left-3 right-3 h-2 bg-black/80 rounded-full blur-sm" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="text-sm font-black uppercase text-white group-hover:text-red-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Angle Zoom Modal */}
        {selectedAngle && (
          <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-3xl space-y-6 animate-in zoom-in-95 duration-300">
              <button
                onClick={() => setSelectedAngle(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[16/10] bg-black rounded-2xl overflow-hidden p-4 flex items-center justify-center">
                <img 
                  src={selectedAngle.image} 
                  alt={selectedAngle.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold">
                  <span>ANGLE {selectedAngle.num}</span>
                  <span>•</span>
                  <span>{selectedAngle.subtitle}</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white">{selectedAngle.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{selectedAngle.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PorscheMenuDrawer;
