import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Clock, CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

const FranchiseRoiCalculator = () => {
  const [investment, setInvestment] = useState(55); // In Lakhs
  const [tier, setTier] = useState('tier1'); // tier1, tier2, tier3
  const [vehicleVolume, setVehicleVolume] = useState(60); // Thar/SUV jobs per month

  // Calculation logic based on Drango average franchisee benchmarking metrics
  const avgTicketSize = tier === 'tier1' ? 42000 : tier === 'tier2' ? 36000 : 30000;
  const grossMonthlyRevenue = (vehicleVolume * avgTicketSize) / 100000; // In Lakhs
  
  // Expenses: Materials (22%), Labor & HQ royalty (18%), Rent & Utilities (15%) = Total 55% expense margin
  const netMonthlyProfit = grossMonthlyRevenue * 0.45;
  const annualProfit = netMonthlyProfit * 12;
  const paybackMonths = Math.max(10, Math.round((investment / netMonthlyProfit) * 10) / 10);

  return (
    <div className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Glow Ambient Backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-850 pb-6">
          <div>
            <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-widest mb-2">
              <Calculator size={16} />
              <span>FINANCIAL PROJECTOR</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black uppercase text-white tracking-wide">
              FRANCHISE ROI & PROFIT CALCULATOR
            </h3>
          </div>
          <p className="text-zinc-400 text-xs md:text-sm max-w-md">
            Simulate your revenue potential based on Mahindra Thar armor packages, ceramic coatings, and high-margin detailing services.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 space-y-6">
            {/* Investment Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label className="font-bold text-zinc-300 uppercase tracking-wide">
                  Initial Capital Investment
                </label>
                <span className="text-xl font-black text-red-500 font-mono">
                  ₹{investment} Lakhs
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="90"
                step="5"
                value={investment}
                onChange={(e) => {
                  setInvestment(Number(e.target.value));
                  playClickSound();
                }}
                className="w-full accent-red-600 cursor-pointer h-2 bg-zinc-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>₹35L (Express Bay)</span>
                <span>₹60L (Studio Thar Ed.)</span>
                <span>₹90L (Flagship 3S)</span>
              </div>
            </div>

            {/* City Tier Selection */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-zinc-300 uppercase tracking-wide">
                Target Location Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'tier1', label: 'Tier 1 Metro', desc: 'Delhi, Mumbai, Blr' },
                  { id: 'tier2', label: 'Tier 2 Hub', desc: 'Pune, Jaipur, Kochi' },
                  { id: 'tier3', label: 'Tier 3 Market', desc: 'Emerging Cities' }
                ].map((item) => {
                  const selected = tier === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        playClickSound();
                        setTier(item.id);
                      }}
                      onMouseEnter={playHoverSound}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                        selected 
                          ? 'bg-red-600/20 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]' 
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div className="text-xs font-bold uppercase">{item.label}</div>
                      <div className="text-[10px] text-zinc-400 truncate">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SUV / Thar Volume Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label className="font-bold text-zinc-300 uppercase tracking-wide">
                  Monthly Thar & Luxury SUV Jobs
                </label>
                <span className="text-xl font-black text-emerald-400 font-mono">
                  {vehicleVolume} Cars / Month
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                step="5"
                value={vehicleVolume}
                onChange={(e) => {
                  setVehicleVolume(Number(e.target.value));
                  playClickSound();
                }}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                <span>20 Cars/mo (Baseline)</span>
                <span>60 Cars/mo (Avg Franchise)</span>
                <span>120 Cars/mo (Top Outlet)</span>
              </div>
            </div>
          </div>

          {/* Projection Outputs Display */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  ESTIMATED PERFORMANCE
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                  <TrendingUp size={12} /> 45% Net Margin
                </span>
              </div>

              {/* Monthly Revenue */}
              <div>
                <span className="text-xs text-zinc-400 uppercase font-medium block mb-1">
                  Est. Monthly Gross Revenue
                </span>
                <div className="text-3xl md:text-4xl font-black text-white font-mono tracking-tight">
                  ₹{grossMonthlyRevenue.toFixed(2)} Lakhs
                </div>
              </div>

              {/* Monthly Net Profit */}
              <div className="pt-4 border-t border-zinc-850">
                <span className="text-xs text-zinc-400 uppercase font-medium block mb-1">
                  Est. Monthly Net Take-Home Profit
                </span>
                <div className="text-3xl md:text-4xl font-black text-emerald-400 font-mono tracking-tight">
                  ₹{netMonthlyProfit.toFixed(2)} Lakhs
                </div>
              </div>

              {/* Payback period */}
              <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <div>
                    <span className="text-xs font-bold text-white uppercase block">
                      Payback Period
                    </span>
                    <span className="text-[11px] text-zinc-400">100% Capital Recovery</span>
                  </div>
                </div>
                <span className="text-2xl font-black text-white font-mono">
                  {paybackMonths} Mos
                </span>
              </div>

              {/* Revenue Stream Breakdown Chips */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  Top Revenue Drivers
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg text-zinc-300">
                    <span className="font-bold text-red-400 block">Thar PPF Armor</span>
                    40% Revenue
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-lg text-zinc-300">
                    <span className="font-bold text-emerald-400 block">Ceramic Coatings</span>
                    35% Revenue
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseRoiCalculator;
