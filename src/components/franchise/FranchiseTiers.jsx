import React from 'react';
import { Award, Check, Zap, Sparkles, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { playClickSound, playHoverSound } from '../../utils/soundEffects';

const TIERS = [
  {
    id: 'express',
    name: 'Express Detailing Bay',
    subtitle: 'Compact Detailing Center',
    badge: 'Fast Setup',
    investment: '₹35L - ₹40L',
    space: '1,500 - 2,000 sq ft',
    payback: '14 - 18 Months',
    features: [
      '2 Detailing & Polish Bays',
      'Ceramic & Graphene Shield Tech',
      'Interior Deep Clean Station',
      'HQ Staff Training & Certification',
      'Drango Product Starter Supply'
    ]
  },
  {
    id: 'studio',
    name: 'Drango Studio (Thar Edition)',
    subtitle: 'Most Popular Franchise Unit',
    badge: '★ BESTSELLER',
    popular: true,
    investment: '₹55L - ₹65L',
    space: '2,500 - 3,500 sq ft',
    payback: '12 - 16 Months',
    features: [
      'Dedicated Thar Off-Road Armor Bay',
      'Dust-free Self-Healing PPF Studio',
      '3 Detailing Bays + Wash Ramp',
      'Customer VR & Coffee Lounge',
      'Direct Master Franchise Rights Option',
      'Full Digital & YouTube Marketing Surge'
    ]
  },
  {
    id: 'flagship',
    name: 'Flagship 3S Mega Center',
    subtitle: 'Complete Detailing & Modification Hub',
    badge: 'Maximum Margin',
    investment: '₹80L - ₹1.2 Cr',
    space: '4,500+ sq ft',
    payback: '16 - 20 Months',
    features: [
      '5 Heavy-Duty Work Bays',
      'Custom Paint Booth & Tint Studio',
      'Lift & Suspension Tuning Garage',
      'Thar Off-Road Accessory Showroom',
      'Exclusive City Territory Dominance',
      'Personal Mentorship from Founder'
    ]
  }
];

const FranchiseTiers = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <Layers size={14} />
          <span>BUSINESS MODEL SELECTION</span>
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
          FRANCHISE MODELS & TIERS
        </h2>
        <p className="text-zinc-400 text-sm">
          Tailored automotive business packages designed for maximum returns and market dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {TIERS.map((tier) => {
          return (
            <div
              key={tier.id}
              onMouseEnter={playHoverSound}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                tier.popular 
                  ? 'bg-gradient-to-b from-red-950/40 via-zinc-900 to-zinc-950 border-2 border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.25)] scale-105 z-10' 
                  : 'bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white font-mono text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  {tier.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  {!tier.popular && (
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-black text-white uppercase">{tier.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{tier.subtitle}</p>
                </div>

                <div className="p-4 bg-zinc-950/80 border border-zinc-850 rounded-2xl space-y-2 font-mono">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Est. Investment:</span>
                    <span className="font-bold text-red-500 text-sm">{tier.investment}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Required Space:</span>
                    <span className="font-bold text-white">{tier.space}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">Payback Period:</span>
                    <span className="font-bold text-emerald-400">{tier.payback}</span>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => {
                    playClickSound();
                    const el = document.getElementById('franchise-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  <span>SELECT {tier.name.split(' ')[0]} MODEL</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FranchiseTiers;
