import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, MapPin, Building, DollarSign, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { playClickSound, playSuccessSound, playHoverSound } from '../../utils/soundEffects';

const FranchiseForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    space: '2500-3500 sq ft',
    budget: '₹40L - ₹60L',
    background: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canvasRef = useRef(null);

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleNext = () => {
    playClickSound();
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    playClickSound();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      playSuccessSound();
      triggerConfetti();
    }, 1200);
  };

  // Canvas particle confetti explosion on submission
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    let particles = Array.from({ length: 80 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 14,
      color: ['#ef4444', '#facc15', '#38bdf8', '#22c55e', '#ffffff'][Math.floor(Math.random() * 5)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      particles = particles.filter((p) => p.y < canvas.height + 20);

      if (particles.length > 0) {
        animId = requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <div id="franchise-form" className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-12 shadow-2xl overflow-hidden">
      {/* Confetti Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-30" />

      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles size={14} />
            <span>PARTNERSHIP ENQUIRY</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
            APPLY FOR A DRANGO FRANCHISE
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm">
            Join India's premiere automotive detailing & Mahindra Thar modification brand. Fill out the application form below.
          </p>
        </div>

        {submitted ? (
          <div className="bg-zinc-900/90 border border-emerald-500/50 p-10 rounded-2xl text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <CheckCircle2 size={48} />
            </div>
            <div>
              <h3 className="text-3xl font-black uppercase text-white">Application Received!</h3>
              <p className="text-zinc-300 text-sm mt-2 max-w-md mx-auto">
                Thank you, <span className="font-bold text-red-500">{formData.name}</span>. Our Franchise Development team will review your application for <span className="font-bold text-white">{formData.city || 'your city'}</span> and contact you within 24 hours.
              </p>
            </div>
            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl max-w-sm mx-auto text-xs text-zinc-400 font-mono">
              Enquiry Ref: DRG-FRAN-{Math.floor(100000 + Math.random() * 900000)}
            </div>
          </div>
        ) : (
          <div className="bg-zinc-900/90 border border-zinc-800 p-6 md:p-10 rounded-2xl space-y-8">
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
              {[
                { num: 1, label: 'Applicant Info' },
                { num: 2, label: 'City & Property' },
                { num: 3, label: 'Investment & Bio' }
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all ${
                    step === s.num
                      ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                      : step > s.num
                      ? 'bg-emerald-600 text-white'
                      : 'bg-zinc-800 text-zinc-500'
                  }`}>
                    {step > s.num ? <CheckCircle2 size={16} /> : s.num}
                  </div>
                  <span className="hidden sm:inline text-xs font-mono font-bold uppercase text-zinc-400">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <h4 className="text-sm font-bold uppercase text-red-400 font-mono">Step 1: Contact Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-zinc-400 font-mono">Applicant Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-zinc-500" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikramaditya Sharma"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 p-3 text-sm text-white focus:outline-none focus:border-red-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-zinc-400 font-mono">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-zinc-500" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 p-3 text-sm text-white focus:outline-none focus:border-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-zinc-400 font-mono">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-4 h-4 text-zinc-500" />
                      <input
                        type="email"
                        required
                        placeholder="vikram@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 p-3 text-sm text-white focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <h4 className="text-sm font-bold uppercase text-red-400 font-mono">Step 2: Location & Space Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-zinc-400 font-mono">Proposed City & State *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-zinc-500" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Pune, Maharashtra"
                          value={formData.city}
                          onChange={(e) => handleChange('city', e.target.value)}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 p-3 text-sm text-white focus:outline-none focus:border-red-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-zinc-400 font-mono">Available Property Size</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3.5 w-4 h-4 text-zinc-500" />
                        <select
                          value={formData.space}
                          onChange={(e) => handleChange('space', e.target.value)}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 p-3 text-sm text-white focus:outline-none focus:border-red-600"
                        >
                          <option>1,500 - 2,500 sq ft</option>
                          <option>2,500 - 3,500 sq ft (Recommended)</option>
                          <option>3,500 - 5,000 sq ft</option>
                          <option>Above 5,000 sq ft</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <h4 className="text-sm font-bold uppercase text-red-400 font-mono">Step 3: Investment & Background</h4>
                  <div className="space-y-1">
                    <label className="text-xs text-zinc-400 font-mono">Investment Budget Capability *</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-red-600"
                    >
                      <option>₹30 Lakhs - ₹40 Lakhs (Express Bay)</option>
                      <option>₹40 Lakhs - ₹60 Lakhs (Studio Thar Edition)</option>
                      <option>₹60 Lakhs - ₹80 Lakhs (Flagship 3S)</option>
                      <option>Above ₹80 Lakhs (Master Franchise)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-zinc-400 font-mono">Business Experience & Space Ownership</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us briefly about your automotive interest or business background..."
                      value={formData.background}
                      onChange={(e) => handleChange('background', e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>
              )}

              {/* Form Action Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-3 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-bold uppercase tracking-wider hover:bg-zinc-700 transition flex items-center gap-2"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : <div />}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest transition flex items-center gap-2 shadow-lg shadow-red-600/30"
                  >
                    Next Step <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest transition flex items-center gap-2 shadow-lg shadow-red-600/40 active:scale-95"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>SUBMIT APPLICATION</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FranchiseForm;
