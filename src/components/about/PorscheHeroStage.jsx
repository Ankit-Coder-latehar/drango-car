import React, { useState } from 'react';
import { Menu, Volume2, MessageCircle } from 'lucide-react';
import { playClickSound, playEngineRoarSound, playHoverSound } from '../../utils/soundEffects';

const PorscheHeroStage = ({ onOpenGallery }) => {
  return (
    <div className="relative w-full h-screen min-h-[650px] bg-black text-white select-none overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 group">
      {/* FULLSCREEN BACKGROUND THAR OFF-DRIVE VIDEO */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.15] scale-105 group-hover:scale-100 transition-transform duration-1000"
        >
          <source src="https://cdn.coverr.co/videos/coverr-driving-a-4x4-jeep-on-a-dirt-road-5784/1080p.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-road-at-night-41258-large.mp4" type="video/mp4" />
        </video>

        {/* Dark Vignette Overlay & Porsche Floor Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* TOP PORSCHE-STYLE HEADER (MATCHING SCREENSHOT) */}
      <div className="relative z-20 flex items-center justify-between pt-2">
        {/* Left Hamburger Menu Icon */}
        <button
          onClick={() => {
            playClickSound();
            if (onOpenGallery) onOpenGallery();
          }}
          onMouseEnter={playHoverSound}
          className="w-12 h-12 rounded-2xl bg-black/40 hover:bg-black/80 backdrop-blur border border-white/10 text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg group/btn"
          aria-label="Open menu drawer"
          title="Open Design Gallery (01-08)"
        >
          <Menu size={22} className="group-hover/btn:scale-110 transition-transform text-white" />
        </button>

        {/* Center Porsche / Drango Header */}
        <div className="text-center font-mono tracking-[0.45em] text-white font-black text-xl md:text-3xl uppercase">
          P O R S C H E
        </div>

        {/* Right Engine Audio Button */}
        <button
          onClick={playEngineRoarSound}
          onMouseEnter={playHoverSound}
          className="w-11 h-11 rounded-2xl bg-black/40 hover:bg-black/80 backdrop-blur border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition"
          title="Play mHawk Engine Sound"
        >
          <Volume2 size={18} className="text-red-500" />
        </button>
      </div>

      {/* BOTTOM LEFT HERO TYPOGRAPHY (EXACT MATCH FOR SCREENSHOT) */}
      <div className="relative z-20 max-w-4xl space-y-4 text-left pb-10 sm:pb-14">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[1.02] filter drop-shadow-2xl">
          THE EQUIPMENT YOU WANT <br className="hidden sm:inline" />
          FOR INTENSE EMOTIONS.
        </h1>

        <div className="space-y-1">
          <p className="text-lg sm:text-2xl font-bold text-zinc-200 uppercase tracking-wide">
            Porsche Cayenne Black Edition.
          </p>
          <p className="text-xs sm:text-sm font-mono text-zinc-400">
            From US$ 117,100* VAT incl.
          </p>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON (BOTTOM RIGHT MATCHING SCREENSHOT) */}
      <a
        href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20the%20Mahindra%20Thar%20Roxx%20Black%20Edition"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={playHoverSound}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 group/wa"
        aria-label="Contact Specialist on WhatsApp"
        title="Contact Specialist on WhatsApp"
      >
        <MessageCircle size={28} className="fill-white group-hover/wa:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-pulse" />
      </a>
    </div>
  );
};

export default PorscheHeroStage;
