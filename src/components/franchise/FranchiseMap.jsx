import React, { useState } from 'react';
import { MapPin, ShieldCheck, Building2, ChevronRight, Sparkles, Navigation } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

const LOCATIONS = [
  { id: 'pune', name: 'Pune (HQ & Master Studio)', status: 'Active HQ', x: 38, y: 56, tharCount: '350+ / mo', slots: 'Full' },
  { id: 'mumbai', name: 'Mumbai Metro', status: '3 Outlets Active', x: 32, y: 52, tharCount: '280+ / mo', slots: '1 Slot Open' },
  { id: 'delhi', name: 'Delhi - NCR', status: '4 Outlets Active', x: 44, y: 28, tharCount: '410+ / mo', slots: '2 Slots Open' },
  { id: 'bangalore', name: 'Bengaluru Tech Hub', status: '2 Outlets Active', x: 42, y: 74, tharCount: '220+ / mo', slots: 'Available' },
  { id: 'hyderabad', name: 'Hyderabad Cyber City', status: '2 Outlets Active', x: 48, y: 62, tharCount: '190+ / mo', slots: 'Available' },
  { id: 'jaipur', name: 'Jaipur Off-Road Sector', status: '1 Outlet Active', x: 38, y: 36, tharCount: '170+ / mo', slots: 'Prime Slot' },
  { id: 'chandigarh', name: 'Chandigarh Tri-City', status: '1 Outlet Active', x: 42, y: 20, tharCount: '260+ / mo', slots: 'High Demand' },
  { id: 'kochi', name: 'Kochi & Kerala Coast', status: '1 Outlet Active', x: 40, y: 84, tharCount: '140+ / mo', slots: 'Available' }
];

const FranchiseMap = () => {
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0]);

  return (
    <div className="bg-zinc-950 border border-zinc-850 rounded-3xl p-6 md:p-10 shadow-2xl space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-850 pb-6">
        <div>
          <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-widest mb-2">
            <Navigation size={16} />
            <span>NATIONWIDE FOOTPRINT</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-black uppercase text-white tracking-wide">
            FRANCHISE NETWORK MAP
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Active Outlets</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> Prime Open Territories</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Animated Visual Map Stage */}
        <div className="lg:col-span-7 relative w-full h-[420px] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center">
          {/* India Vector Outline Background Visual */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Map Node Points */}
          <div className="relative w-full h-full">
            {LOCATIONS.map((loc) => {
              const isSelected = activeLoc.id === loc.id;
              return (
                <div
                  key={loc.id}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  onClick={() => {
                    playClickSound();
                    setActiveLoc(loc);
                  }}
                  onMouseEnter={playHoverSound}
                >
                  <div className="relative flex items-center justify-center group">
                    <span className={`w-8 h-8 rounded-full absolute animate-ping opacity-75 ${isSelected ? 'bg-red-500' : 'bg-emerald-500'}`} />
                    <span className={`w-4 h-4 rounded-full border-2 border-white transition-transform duration-300 shadow-lg ${isSelected ? 'bg-red-600 scale-125' : 'bg-emerald-500 group-hover:scale-125'}`} />
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-white bg-zinc-900/90 border border-zinc-700 px-2 py-0.5 rounded shadow">
                      {loc.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Location Details Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-2xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">
              LOCATION PROFILE
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">
              {activeLoc.slots}
            </span>
          </div>

          <div>
            <h4 className="text-2xl font-black text-white uppercase">{activeLoc.name}</h4>
            <p className="text-xs text-zinc-400 mt-1">{activeLoc.status}</p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-850 rounded-xl">
              <span className="text-xs text-zinc-400">Thar Detailing Volume</span>
              <span className="text-sm font-bold font-mono text-white">{activeLoc.tharCount}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-950 border border-zinc-850 rounded-xl">
              <span className="text-xs text-zinc-400">HQ Support Priority</span>
              <span className="text-sm font-bold font-mono text-emerald-400">Tier-1 Direct</span>
            </div>
          </div>

          <button 
            onClick={() => {
              playClickSound();
              const el = document.getElementById('franchise-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest text-xs py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-98"
          >
            <span>APPLY FOR {activeLoc.name.toUpperCase()}</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FranchiseMap;
