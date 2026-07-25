import React, { useEffect } from 'react';
import { Award, Users, TrendingUp, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Star, Cpu, ArrowUpRight } from 'lucide-react';
import Thar3DStage from '../components/franchise/Thar3DStage';
import FranchiseRoiCalculator from '../components/franchise/FranchiseRoiCalculator';
import FranchiseMap from '../components/franchise/FranchiseMap';
import TharTransformation from '../components/franchise/TharTransformation';
import FranchiseTiers from '../components/franchise/FranchiseTiers';
import FranchiseForm from '../components/franchise/FranchiseForm';
import { playClickSound } from '../utils/soundEffects';

const Franchise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#070708] text-white font-sans selection:bg-red-600 selection:text-white overflow-hidden">
      {/* Background Decorative Ambient Flares */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-amber-600/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 space-y-20 md:space-y-32 pb-24">
        {/* HERO SECTION */}
        <section className="relative pt-16 md:pt-24 px-4 max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-mono font-bold tracking-widest uppercase animate-pulse">
            <Sparkles size={14} />
            <span>AWARD-WINNING FRANCHISE NETWORK</span>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05]">
              OWN A HIGH-MARGIN <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-500 bg-clip-text text-transparent">DRANGO AUTO CARE</span> FRANCHISE
            </h1>
            <p className="text-zinc-400 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              Partner with India’s leading auto detailing & Mahindra Thar modification powerhouse. Build a lucrative 45%+ margin auto business under Drango's nationwide brand authority.
            </p>
          </div>

          {/* Quick Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
            {[
              { label: 'ACTIVE OUTLETS', val: '45+ Outlets', sub: 'Across 18 States' },
              { label: 'THAR MARKET SHARE', val: '#1 Specialist', sub: 'Dedicated Thar Armor' },
              { label: 'AVG ANNUAL MARGIN', val: '45% Net ROI', sub: '12-18 Mos Payback' },
              { label: 'YOUTUBE AUDIENCE', val: '2.3M+ Fans', sub: 'Organic Footfalls' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-zinc-900/80 border border-zinc-850 p-4 rounded-2xl text-center backdrop-blur">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">{stat.label}</span>
                <span className="text-xl md:text-2xl font-black text-white font-mono block my-1">{stat.val}</span>
                <span className="text-[11px] text-red-400">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* 3D MAHINDRA THAR INTERACTIVE STAGE */}
          <div className="pt-8">
            <Thar3DStage />
          </div>
        </section>

        {/* WHY PARTNER WITH DRANGO */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest">
              BUSINESS ADVANTAGE
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
              WHY DRANGO IS THE #1 CHOICE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Enormous Brand Footfall",
                desc: "Drango's massive digital presence (2.3M+ YouTube Subscribers) guarantees instant customer trust and queue-up bookings from day one.",
                highlight: "Zero Marketing Guesswork"
              },
              {
                icon: Cpu,
                title: "Thar & SUV Monopoly",
                desc: "Mahindra Thar owners spend ₹1.5L to ₹4L on modifications & PPF. We equip your franchise with proprietary Thar armor packages.",
                highlight: "Highest Ticket Size in India"
              },
              {
                icon: Users,
                title: "Hands-on HQ Support",
                desc: "14-day mandatory training program at Pune HQ for detailers, painters, and managers, plus site blueprinting and supply chain support.",
                highlight: "Full Operations Playbook"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-8 rounded-3xl space-y-4 hover:border-red-500/50 transition-all duration-300 group shadow-xl"
                >
                  <div className="w-14 h-14 bg-red-600/10 text-red-500 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-widest block">
                    {item.highlight}
                  </span>
                  <h3 className="text-xl font-black uppercase text-white">{item.title}</h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* BEFORE & AFTER THAR TRANSFORMATION SHOWCASE */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <TharTransformation />
        </section>

        {/* FRANCHISE ROI CALCULATOR */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <FranchiseRoiCalculator />
        </section>

        {/* FRANCHISE TIERS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <FranchiseTiers />
        </section>

        {/* NATIONWIDE NETWORK MAP */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <FranchiseMap />
        </section>

        {/* GAMIFIED MULTI-STEP APPLICATION FORM */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <FranchiseForm />
        </section>
      </div>
    </div>
  );
};

export default Franchise;
