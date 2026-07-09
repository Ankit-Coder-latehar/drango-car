import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqsList = [
  {
    q: "What is Paint Protection Film (PPF) and why does my car need it?",
    a: "Paint Protection Film (PPF) is a clear, thermoplastic polyurethane (TPU) film applied to the exterior painted surfaces of your vehicle. It acts as a physical shield protecting against rock chips, minor parking scratches, swirl marks, bird droppings, and UV oxidation. If you want to keep your factory paint pristine and maintain maximum resale value, PPF is the best investment."
  },
  {
    q: "What is the difference between PPF and Ceramic Coating?",
    a: "PPF is a physical polyurethane membrane (approx. 150-200 microns thick) that provides heavy protection against impact damage like stone chips and key scratches. Ceramic Coating is a chemical nano-glass layer (approx. 2-3 microns thick) that bonds with clearcoat to provide extreme gloss, UV protection, and hydrophobicity (water-repellency), but cannot prevent physical stone chip damage."
  },
  {
    q: "How long does the Ceramic Coating last?",
    a: "Depending on the package and maintenance, our ceramic coatings last anywhere from 2 to 5+ years. Regularly washing the vehicle using pH-neutral shampoos (like Barricade) and visiting our studio for bi-annual maintenance cycles ensures the coating retains its maximum gloss and hydrophobic performance."
  },
  {
    q: "What is Peelable Paint and is it safe for my original paint?",
    a: "Peelable Paint (Rubbershield) is a sprayable, liquid protection system that matches standard automotive paint texture exactly. It is 100% safe for OEM factory paint. When you want to remove it, it peels off cleanly, leaving the factory paint completely untouched. Note that it should only be applied over original OEM factory-baked paint."
  },
  {
    q: "Do you offer any warranty on PPF?",
    a: "Yes. All our premium TPU PPF installations come with a manufacturer-backed warranty ranging from 5 to 10 years depending on the brand select. The warranty covers bubbling, cracking, yellowing, and delamination under normal usage conditions."
  }
];

const Faq = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-[#0b0b0c] text-white font-sans">
      {/* Header */}
      <section className="relative py-20 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Got questions about PPF, Ceramic Coatings, or custom detailing? We've got you covered.
          </p>
        </div>
      </section>

      {/* Accordions */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          {faqsList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-zinc-850 transition-colors"
                >
                  <h3 className="font-bold text-sm md:text-base uppercase text-white tracking-wide">
                    {faq.q}
                  </h3>
                  {isOpen ? <ChevronUp className="text-red-500 shrink-0" /> : <ChevronDown className="text-red-500 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 border-t border-zinc-850 text-zinc-400 text-xs md:text-sm leading-relaxed font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Faq;
