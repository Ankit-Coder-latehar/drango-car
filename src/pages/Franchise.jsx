import React, { useState } from 'react';
import { Award, Users, CheckCircle, TrendingUp, DollarSign, Send } from 'lucide-react';

const Franchise = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-[#0b0b0c] text-white font-sans">
      {/* Header */}
      <section className="relative py-20 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">FRANCHISE OPPORTUNITIES</h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Partner with India's fastest growing premium auto care brand. Build a profitable detailing business under Drango's mentorship.
          </p>
        </div>
      </section>

      {/* Why Franchise */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase">BUSINESS MODEL</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">WHY PARTNER WITH US</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Massive Brand Equity",
              desc: "Leverage Drango's enormous digital presence (2.3M+ YouTube subscribers) that drives customer trust and initial footfalls from day one."
            },
            {
              icon: TrendingUp,
              title: "High ROI Potential",
              desc: "Detailing and premium coatings are high-margin services. Benefit from our optimized product supply chains and proprietary operations."
            },
            {
              icon: Users,
              title: "Training & Tech Support",
              desc: "Complete hands-on training at Pune HQ for your detailers, painters, and managers, along with site setup blueprints and marketing support."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-zinc-900 border border-zinc-850 p-8 rounded-xl space-y-4">
                <div className="w-12 h-12 bg-red-600/10 text-red-500 flex items-center justify-center rounded-lg">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase text-white">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Franchise Form & Requirements */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">CRITERIA</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">FRANCHISEE REQUIREMENTS</h2>
            
            <ul className="space-y-4">
              {[
                "Minimum space requirement of 2,500 to 4,000 sq ft.",
                "Prime location with high visibility and easy vehicle access.",
                "Investment capacity of ₹40L - ₹60L (varies by city and tier).",
                "Passion for cars and adherence to Drango's strict quality guidelines.",
                "Strong local marketing and customer relationship management skills."
              ].map((pt, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-zinc-300">
                  <CheckCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-10 rounded-xl">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle size={64} className="text-green-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Application Submitted!</h3>
                  <p className="text-zinc-400 text-sm">
                    Thank you for your interest. Our Franchise Development team will review your application and contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold uppercase text-white mb-4">Franchise Enquiry Form</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Applicant Name *" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm focus:outline-none focus:border-red-600"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm focus:outline-none focus:border-red-600"
                    />
                    <input 
                      type="text" 
                      placeholder="Proposed City/State *" 
                      required 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm focus:outline-none focus:border-red-600">
                      <option>Investment Budget Capability *</option>
                      <option>₹30 Lakhs - ₹40 Lakhs</option>
                      <option>₹40 Lakhs - ₹60 Lakhs</option>
                      <option>₹60 Lakhs - ₹80 Lakhs</option>
                      <option>Above ₹80 Lakhs</option>
                    </select>
                  </div>

                  <div>
                    <textarea 
                      placeholder="Tell us about your background and if you own a property/space..." 
                      rows={4} 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest text-xs py-4 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>SUBMIT APPLICATION</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
