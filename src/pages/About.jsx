import React from 'react';
import { Target, Award, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#0b0b0c] text-white font-sans">
      {/* Page Header */}
      <section className="relative py-20 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">ABOUT US</h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Learn more about Drango, our founders, and our relentless pursuit of detailing perfection.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">OUR HISTORY</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wide">HOW WE STARTED</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Drango was founded with one goal: to change the way car detailing is perceived and executed in India. For years, the Indian auto aftermarket was dominated by low-quality polishing jobs disguised as protective coatings. We wanted to change that.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our founders, Sachin and Lalit Choudhary, realized that car owners were hungry for genuine knowledge and premium craftsmanship. Through rigorous research and global sourcing, we introduced premium TPU-based Paint Protection Films and custom oven-baked paint finishes that set new industry standards.
            </p>
          </div>
          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800" 
              alt="Detailing work"
              className="rounded-xl border border-zinc-800 brightness-90 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-zinc-950 py-20 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-zinc-900 border border-zinc-850 p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-red-600/10 text-red-500 flex items-center justify-center rounded-lg">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">OUR MISSION</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              To deliver premium vehicle protection and restoration with unmatched transparency, educating car owners along the way so they can make informed decisions about their prized possessions.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-850 p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-red-600/10 text-red-500 flex items-center justify-center rounded-lg">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase text-white">OUR VISION</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              To build a global benchmark for automotive aesthetic care, expanding our footprint with highly standardized franchise stores powered by top-tier detailing technology and training.
            </p>
          </div>
        </div>
      </section>

      {/* Why Drango */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wide">WHAT SETS US APART</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Absolute Transparency",
              desc: "No hidden charges, no gimmicky products. We explain exactly what your car needs and back it up with video evidence of the process."
            },
            {
              title: "Master Craftsmanship",
              desc: "Our installers and painters undergo rigorous certification. We take care of every corner, edge, and trim with military precision."
            },
            {
              title: "Premium Materials Only",
              desc: "We exclusively import premium TPU films and paint systems designed to withstand the harsh tropical environment of the Indian subcontinent."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-xl space-y-4">
              <h3 className="text-lg font-bold uppercase text-white border-b border-zinc-800 pb-3">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
