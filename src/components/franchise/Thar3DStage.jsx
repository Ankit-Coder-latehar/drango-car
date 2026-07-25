import React, { useRef, useEffect, useState } from 'react';
import { Eye, Zap, ShieldCheck, Sparkles, Volume2, Maximize2, RefreshCw, Compass } from 'lucide-react';
import { playClickSound, playEngineRoarSound, playHoverSound } from '../../utils/soundEffects';

const COLOR_WRAPS = [
  { id: 'stealth', name: 'Stealth Matte Black', hex: '#111114', accent: '#ef4444', glow: 'rgba(239, 68, 68, 0.4)' },
  { id: 'dragon', name: 'Dragon Fire Red', hex: '#dc2626', accent: '#f87171', glow: 'rgba(220, 38, 38, 0.5)' },
  { id: 'armor', name: 'Armor Olive Green', hex: '#3f6212', accent: '#84cc16', glow: 'rgba(132, 204, 22, 0.4)' },
  { id: 'cyber', name: 'Cyber Gold Metallic', hex: '#ca8a04', accent: '#facc15', glow: 'rgba(250, 204, 21, 0.4)' },
  { id: 'glacier', name: 'Glacier Ceramic White', hex: '#f8fafc', accent: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' }
];

const HOTSPOTS = [
  {
    id: 'lights',
    x: 28,
    y: 52,
    title: 'Matrix DRL Headlight Bay',
    subtitle: 'Signature Lighting Upgrade',
    desc: 'High-margin custom LED headlight retrofits & smoked DRL installation package popular across 95% of Thar buyers.',
    stat: '₹45K Avg Ticket'
  },
  {
    id: 'ppf',
    x: 48,
    y: 40,
    title: 'Self-Healing TPU Armor PPF',
    subtitle: 'Drango Shield Protection',
    desc: 'Proprietary 200-micron self-healing paint protection film engineered specifically for harsh off-road Thar usage.',
    stat: '82% Margin Product'
  },
  {
    id: 'wheels',
    x: 72,
    y: 68,
    title: 'Custom Beast Wheels & Lift',
    subtitle: 'Off-Road Stance Kit',
    desc: '20-inch alloy rims, off-road mud-terrain tires, and 2-inch suspension lift kits engineered in-house.',
    stat: '₹1.2L Package'
  },
  {
    id: 'ceramic',
    x: 58,
    y: 58,
    title: '9H Dual-Layer Nano Ceramic',
    subtitle: 'Hydrophobic Polish Bay',
    desc: 'Deep metallic gloss enhancement with 5-year warranty, boosting Thar showroom shine and customer retention.',
    stat: '₹35K Package'
  }
];

const Thar3DStage = () => {
  const canvasRef = useRef(null);
  const [selectedWrap, setSelectedWrap] = useState(COLOR_WRAPS[1]); // Dragon Fire Red default
  const [lightsOn, setLightsOn] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Mouse Move for 3D tilt tracking
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  // Canvas 3D rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      speedY: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3
    }));

    const render = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      const width = canvas.width;
      const height = canvas.height;

      // Clear with dark ambient background gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 2 - 50, 50,
        width / 2, height / 2, width * 0.75
      );
      bgGrad.addColorStop(0, '#18181b');
      bgGrad.addColorStop(0.5, '#09090b');
      bgGrad.addColorStop(1, '#030303');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render 3D Perspective Grid Platform
      ctx.save();
      const gridY = height * 0.68;
      const tiltX = mousePos.x * 25;
      const tiltY = mousePos.y * 15;

      // Stage Glow Circle
      const stageGlow = ctx.createRadialGradient(
        width / 2 + tiltX, gridY + tiltY, 20,
        width / 2 + tiltX, gridY + tiltY, width * 0.45
      );
      stageGlow.addColorStop(0, selectedWrap.glow);
      stageGlow.addColorStop(0.7, 'rgba(239, 68, 68, 0.05)');
      stageGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = stageGlow;
      ctx.beginPath();
      ctx.ellipse(width / 2 + tiltX, gridY + 20 + tiltY, width * 0.42, 100, 0, 0, Math.PI * 2);
      ctx.fill();

      // Perspective Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      const totalGridLines = 16;
      for (let i = 0; i <= totalGridLines; i++) {
        const angle = (i / totalGridLines) * Math.PI - Math.PI / 2;
        const startX = width / 2 + tiltX;
        const startY = gridY - 80 + tiltY;
        const endX = width / 2 + Math.cos(angle) * width * 0.8 + tiltX;
        const endY = height + 100;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Horizontal Ring Lines
      for (let r = 50; r < width * 0.45; r += 45) {
        ctx.beginPath();
        ctx.ellipse(width / 2 + tiltX, gridY + 20 + tiltY, r, r * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Render Headlight Beam Cone if lights are ON
      if (lightsOn) {
        ctx.save();
        const beamGrad = ctx.createLinearGradient(
          width * 0.25 + tiltX, gridY - 40 + tiltY,
          width * 0.05 + tiltX, height
        );
        beamGrad.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        beamGrad.addColorStop(0.3, 'rgba(239, 68, 68, 0.25)');
        beamGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(width * 0.32 + tiltX, gridY - 40 + tiltY);
        ctx.lineTo(0, gridY + 120 + tiltY);
        ctx.lineTo(width * 0.15 + tiltX, height);
        ctx.lineTo(width * 0.38 + tiltX, gridY - 20 + tiltY);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // Floating Particle Sparks
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = selectedWrap.accent;
        ctx.globalAlpha = p.alpha * 0.7;
        ctx.shadowBlur = 8;
        ctx.shadowColor = selectedWrap.accent;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedWrap, lightsOn, mousePos]);

  return (
    <div 
      className="relative w-full h-[580px] md:h-[680px] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group select-none"
      onMouseMove={handleMouseMove}
    >
      {/* Background Canvas for 3D Stage & Particle Shaders */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Hero Showcase Image of Mahindra Thar with 3D Mouse Parallax */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * 12}px, 0) scale(${1 + Math.abs(mousePos.y) * 0.02})`
        }}
      >
        <div className="relative w-[85%] md:w-[75%] max-w-[850px] aspect-[16/9] flex items-center justify-center">
          {/* Main 3D Rendered Thar */}
          <img 
            src="/thar_detailing_franchise.png" 
            alt="Mahindra Thar Roxx Detailing Showcase"
            className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition-all duration-700"
            style={{
              filter: `drop-shadow(0 20px 30px ${selectedWrap.glow}) brightness(${lightsOn ? 1.08 : 0.95})`
            }}
          />

          {/* Color Tint Overlay for Real-Time Wrap Customizer */}
          <div 
            className="absolute inset-0 mix-blend-color opacity-40 transition-colors duration-500 rounded-2xl pointer-events-none"
            style={{ backgroundColor: selectedWrap.hex === '#111114' ? 'transparent' : selectedWrap.hex }}
          />

          {/* Glowing DRL Lights Overlay when Lights ON */}
          {lightsOn && (
            <div className="absolute top-[48%] left-[26%] w-10 h-10 bg-white rounded-full blur-md opacity-90 animate-pulse" />
          )}
        </div>
      </div>

      {/* Top Floating Controls Bar */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 z-20 pointer-events-auto">
        <div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 px-4 py-2 rounded-full">
          <Sparkles className="w-4 h-4 text-red-500 animate-spin" style={{ animationDuration: '4s' }} />
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase">
            3D MAHINDRA THAR FRANCHISE STAGE
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        </div>

        <div className="flex items-center gap-3">
          {/* Headlights Toggle */}
          <button
            onClick={() => {
              playClickSound();
              setLightsOn(!lightsOn);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
              lightsOn 
                ? 'bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${lightsOn ? 'fill-white' : ''}`} />
            <span>DRL Beam: {lightsOn ? 'ON' : 'OFF'}</span>
          </button>

          {/* Engine Sound Button */}
          <button
            onClick={() => {
              playEngineRoarSound();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all shadow-lg active:scale-95"
            title="Play Engine Sound"
          >
            <Volume2 className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden sm:inline">Thar Engine Roar</span>
          </button>
        </div>
      </div>

      {/* Interactive 3D Hotspots on Vehicle */}
      <div className="absolute inset-0 pointer-events-auto z-10">
        {HOTSPOTS.map((hs) => {
          const isActive = activeHotspot?.id === hs.id;
          return (
            <div
              key={hs.id}
              style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group/spot"
            >
              <button
                onClick={() => {
                  playClickSound();
                  setActiveHotspot(isActive ? null : hs);
                }}
                onMouseEnter={playHoverSound}
                className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-red-600 scale-125 shadow-[0_0_25px_rgba(239,68,68,0.9)]' 
                    : 'bg-zinc-900/90 border border-zinc-700 hover:border-red-500 hover:scale-110'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-white relative z-10" />
              </button>

              {/* Floating Tooltip Card */}
              {isActive && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 md:w-72 bg-zinc-900/95 backdrop-blur-2xl border border-red-500/40 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-30 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
                      {hs.subtitle}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-2 py-0.5 rounded-md">
                      {hs.stat}
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase mb-1">{hs.title}</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-3">{hs.desc}</p>
                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Included in Franchise Bay</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Wrap Selector & Controls */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-20 pointer-events-auto bg-zinc-950/80 backdrop-blur-xl border border-zinc-850 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <Compass className="w-4 h-4 text-red-500" />
          <div className="text-left">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
              CUSTOM WRAP COLORWAY
            </span>
            <span className="text-xs font-black text-white uppercase">{selectedWrap.name}</span>
          </div>
        </div>

        {/* Color Buttons */}
        <div className="flex items-center gap-2.5">
          {COLOR_WRAPS.map((wrap) => {
            const isSelected = selectedWrap.id === wrap.id;
            return (
              <button
                key={wrap.id}
                onClick={() => {
                  playClickSound();
                  setSelectedWrap(wrap);
                }}
                onMouseEnter={playHoverSound}
                className={`group/btn relative w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isSelected ? 'ring-2 ring-red-500 scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                style={{ backgroundColor: wrap.hex }}
                title={wrap.name}
              >
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />}
              </button>
            );
          })}
        </div>

        {/* Info Badge */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Eye className="w-3.5 h-3.5 text-zinc-500" />
          <span>Interactive 360° View Studio</span>
        </div>
      </div>
    </div>
  );
};

export default Thar3DStage;
