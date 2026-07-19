import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import { Shield, Sparkles, Paintbrush, Award, Users, MapPin, Star, Play, CheckCircle2, ChevronRight, ChevronLeft, Maximize2, X, Headphones, Calendar, Info } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const brandPartners = [
  {
    name: "JohnBean",
    svg: (
      <svg viewBox="0 0 120 30" className="h-6 w-auto text-white fill-current">
        <text x="0" y="22" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontStyle="italic" fontSize="18" fill="#A1A1AA">
          John<tspan fill="#FFFFFF">Bean</tspan>
        </text>
      </svg>
    )
  },
  {
    name: "KENNEDY",
    svg: (
      <svg viewBox="0 0 110 32" className="h-7 w-auto">
        <rect x="0" y="0" width="110" height="32" fill="#E50914" rx="2" />
        <text x="55" y="18" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="14" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.5">KENNEDY</text>
        <line x1="8" y1="22" x2="102" y2="22" stroke="#FFFFFF" strokeWidth="0.8" />
        <text x="55" y="28" fontFamily="'Montserrat', sans-serif" fontWeight="700" fontSize="4.5" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.2">QUALITY INDUSTRIAL TOOLING</text>
      </svg>
    )
  },
  {
    name: "NORTON",
    svg: (
      <svg viewBox="0 0 110 30" className="h-6.5 w-auto">
        <polygon points="12,0 110,0 98,30 0,30" fill="#005A9C" />
        <text x="55" y="21" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontStyle="italic" fontSize="15" fill="#FFFFFF" textAnchor="middle" letterSpacing="1">NORTON</text>
      </svg>
    )
  },
  {
    name: "OBSS",
    svg: (
      <svg viewBox="0 0 150 32" className="h-6.5 w-auto">
        <text x="0" y="19" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="20" fill="none" stroke="#00d2ff" strokeWidth="1.5" letterSpacing="0.5">OBSS</text>
        <text x="0" y="29" fontFamily="'Outfit', sans-serif" fontWeight="600" fontSize="5" fill="#8E9AA6" letterSpacing="0.1">
          <tspan fill="#00d2ff">Orient </tspan>BodyShop Solutions India P. Ltd.
        </text>
      </svg>
    )
  },
  {
    name: "TRAXX",
    svg: (
      <div className="bg-white px-2 py-0.5 rounded flex items-center justify-center gap-1 h-7 border border-zinc-200 shadow-sm shrink-0">
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
          <path d="M12 2 L20 8 L16 20 L8 20 L4 8 Z" fill="#E50914" />
          <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
        </svg>
        <span className="text-[9px] font-black text-black tracking-widest leading-none font-sans uppercase">TRAXX</span>
      </div>
    )
  },
  {
    name: "3M",
    svg: (
      <svg viewBox="0 0 60 30" className="h-7 w-auto">
        <text x="0" y="24" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="28" fill="#E50914" letterSpacing="-1.5">3M</text>
      </svg>
    )
  },
  {
    name: "AXALTA",
    svg: (
      <svg viewBox="0 0 110 30" className="h-6.5 w-auto">
        <g fill="#E50914">
          <path d="M14,2.5C7.7,2.5,2.5,7.7,2.5,14S7.7,25.5,14,25.5c4.7,0,8.7-2.8,10.5-6.8h-5.1c-1.2,1.9-3.4,3.3-5.9,3.3
            c-3.8,0-6.9-3.1-6.9-6.9s3.1-6.9,6.9-6.9c2.5,0,4.7,1.3,5.9,3.3h5.1C22.7,5.3,18.7,2.5,14,2.5z"/>
          <polygon points="14,8.2 10.7,17 17.3,17" />
          <text x="35" y="20" fontFamily="'Montserrat', sans-serif" fontWeight="800" fontSize="13" fill="#E50914" letterSpacing="1">AXALTA</text>
        </g>
      </svg>
    )
  },
  {
    name: "BLACK+DECKER",
    svg: (
      <svg viewBox="0 0 130 30" className="h-6.5 w-auto">
        <rect x="1" y="1" width="128" height="28" fill="none" stroke="#FF8C00" strokeWidth="1.5" rx="3" />
        <text x="65" y="19" fontFamily="'Montserrat', sans-serif" fontWeight="900" fontSize="11" fill="#FF8C00" textAnchor="middle" letterSpacing="0.2">BLACK+DECKER</text>
      </svg>
    )
  }
];

const slidesData = [
  {
    image: "Gemini_Generated_Image_hatk9ghatk9ghatk.png",
    tagline: "INDIA'S MOST POPULAR AUTO DETAILING BRAND",
    title: <>REFINE. PROTECT. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">RESTORE.</span></>,
    desc: "Get premium Paint Protection Film (PPF), high-end Ceramic Coating, custom body shop painting, and interior restoration from India's trusted automotive specialists."
  },
  {
    image: "Gemini_Generated_Image_1r45nm1r45nm1r45.png",
    tagline: "ADVANCED NANO-TECHNOLOGY CERAMIC COATING",
    title: <>LIQUID GLASS <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">9H SHINE.</span></>,
    desc: "Achieve unmatched gloss, extreme hydrophobicity, and chemical paint protection for your luxury vehicles."
  },
  {
    image: "Gemini_Generated_Image_lpihi6lpihi6lpih.png", // Mahindra Thar style off-roader
    tagline: "MAHINDRA THAR ARMOR & MACHINERY UPGRADES",
    title: <>THAR RUGGED <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">PROTECTION.</span></>,
    desc: "Equip your Thar with off-road armor packages, self-healing TPU PPF protection, custom bumpers, suspension elements, and rugged aesthetic upgrades."
  },
  {
    image: "Gemini_Generated_Image_fxcwdbfxcwdbfxcw.png", // Mahindra Scorpio style SUV
    tagline: "MAHINDRA SCORPIO CUSTOMIZATION & RESTORATION",
    title: <>SCORPIO PREMIUM <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">RESTORATION.</span></>,
    desc: "Restore your Scorpio-N or Classic with professional oven-baked panel paint finishes, de-chroming packages, alloy modifications, and premium interior detailing."
  }
];

const AnimatedCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);

  useEffect(() => {
    const match = value.match(/^([\d.,]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numStr = match[1].replace(/,/g, '');
    const isFloat = numStr.includes('.');
    const end = parseFloat(numStr);
    const suffix = match[2];

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime = null;
        const duration = 2000;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentVal = progress * end;

          let formatted;
          if (isFloat) {
            formatted = currentVal.toFixed(1);
          } else {
            formatted = Math.floor(currentVal).toLocaleString();
          }
          setDisplayValue(formatted + suffix);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue((isFloat ? end.toFixed(1) : Math.floor(end).toLocaleString()) + suffix);
          }
        };
        requestAnimationFrame(animate);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
};

const TharSilhouette = ({ lightsOn, toggleLights }) => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex flex-col items-center justify-center bg-black border border-zinc-900 rounded-3xl p-4 shadow-2xl overflow-hidden group">
      {/* Container for image and glow overlays */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-zinc-950">
        <img
          src="/mahindra_thar_roxx_front.png"
          alt="Mahindra Thar Roxx"
          className={`w-full h-full object-cover transition-all duration-500 ${lightsOn ? "brightness-100 contrast-100" : "brightness-40 contrast-125"
            }`}
        />

        {/* Headlight beams (lens flare rays) stretching out */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${lightsOn ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Left Headlight Glow */}
        <div
          className={`absolute w-[8%] h-[8%] rounded-full bg-white transition-opacity duration-300 pointer-events-none ${lightsOn ? "opacity-100" : "opacity-0"
            }`}
          style={{
            top: "49.3%",
            left: "43.1%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 20px 8px rgba(255, 255, 255, 0.95), 0 0 45px 20px rgba(56, 189, 248, 0.65), 0 0 70px 30px rgba(56, 189, 248, 0.3)"
          }}
        />

        {/* Right Headlight Glow */}
        <div
          className={`absolute w-[8%] h-[8%] rounded-full bg-white transition-opacity duration-300 pointer-events-none ${lightsOn ? "opacity-100" : "opacity-0"
            }`}
          style={{
            top: "49.3%",
            left: "75.5%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 20px 8px rgba(255, 255, 255, 0.95), 0 0 45px 20px rgba(56, 189, 248, 0.65), 0 0 70px 30px rgba(56, 189, 248, 0.3)"
          }}
        />

        {/* Left Foglight Glow */}
        <div
          className={`absolute w-[4%] h-[4%] rounded-full bg-white transition-opacity duration-300 pointer-events-none ${lightsOn ? "opacity-100" : "opacity-0"
            }`}
          style={{
            top: "61.8%",
            left: "42.5%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.95), 0 0 30px 10px rgba(56, 189, 248, 0.5)"
          }}
        />

        {/* Right Foglight Glow */}
        <div
          className={`absolute w-[4%] h-[4%] rounded-full bg-white transition-opacity duration-300 pointer-events-none ${lightsOn ? "opacity-100" : "opacity-0"
            }`}
          style={{
            top: "61.8%",
            left: "79.2%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.95), 0 0 30px 10px rgba(56, 189, 248, 0.5)"
          }}
        />

        {/* Left DRL Glow */}
        <div
          className={`absolute w-[4%] h-[2.5%] rounded-sm bg-white transition-opacity duration-300 pointer-events-none ${lightsOn ? "opacity-90" : "opacity-0"
            }`}
          style={{
            top: "50.5%",
            left: "34.5%",
            transform: "translate(-50%, -50%) rotate(-5deg)",
            boxShadow: "0 0 12px 4px rgba(255, 255, 255, 0.9), 0 0 24px 8px rgba(56, 189, 248, 0.4)"
          }}
        />

        {/* Right DRL Glow */}
        <div
          className={`absolute w-[4%] h-[2.5%] rounded-sm bg-white transition-opacity duration-300 pointer-events-none ${lightsOn ? "opacity-90" : "opacity-0"
            }`}
          style={{
            top: "50.5%",
            left: "83.5%",
            transform: "translate(-50%, -50%) rotate(5deg)",
            boxShadow: "0 0 12px 4px rgba(255, 255, 255, 0.9), 0 0 24px 8px rgba(56, 189, 248, 0.4)"
          }}
        />
      </div>

      {/* Manual Override Switch */}
      <button
        type="button"
        onClick={toggleLights}
        className={`mt-4 px-6 py-2 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 border ${lightsOn
          ? "bg-red-600 hover:bg-red-700 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
          : "bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-zinc-800"
          }`}
      >
        Headlights: {lightsOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

const ContactProcessSection = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const totalDist = windowHeight + rect.height;
        const currentDist = windowHeight - rect.top;
        const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);

        setScrollProgress(progress * 100);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const steps = [
      {
        step: "1. Share Your Requirements",
        desc: "Reach us through the service inquiry form & tell us what you are looking for. Make sure you check the filled details.",
        icon: Headphones
      },
      {
        step: "2. Schedule A Consultation",
        desc: "If needed, you might have to bring your car in for a physical inspection. If not, then you shall receive a detailed estimate via mail.",
        icon: Calendar
      },
      {
        step: "3. Book An Appointment",
        desc: "Wish to proceed ahead? Then pay a small refundable token and fix the latest available date. We work on appointments only.",
        icon: Info
      },
      {
        step: "4. Bring Your Car In For Work",
        desc: "Your appointment date has arrived? Simply walk in with your car and our advisor will take care of the rest.",
        icon: CheckCircle2
      }
    ];

    return (
      <section ref={sectionRef} className="py-20 md:py-28 bg-[#0b0b0c] border-t border-zinc-900 overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Title */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
              CONTACT <span className="text-[#f28e2b]">PROCESS</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Follow our simple step-by-step roadmap to get your vehicle serviced and restored.
            </p>
          </div>

          {/* Timeline Roadmap Layout */}
          <div className="relative pt-6">
            {/* Main Horizontal Line (Desktop) */}
            <div className="absolute top-14 left-10 right-10 h-[2px] bg-zinc-800 hidden md:block z-0" />

            {/* Active Progress Line */}
            <div
              className="absolute top-14 left-10 h-[2px] bg-[#f28e2b] shadow-[0_0_12px_#f28e2b] transition-all duration-150 ease-out hidden md:block z-0"
              style={{ width: `calc(${scrollProgress}% - 50px)` }}
            />

            {/* Scrolling Mahindra Thar Icon moving on the line */}
            <div
              className="absolute top-14 z-20 transition-all duration-150 ease-out pointer-events-none hidden md:block"
              style={{
                left: `calc(10% + ${scrollProgress * 0.78}%)`,
                transform: 'translate(-50%, -65%)'
              }}
            >
              <div className="relative flex flex-col items-center">
                {/* Thar Car Image Cutout */}
                <img
                  src="/mahindra_thar_roxx_front.png"
                  alt="Mahindra Thar"
                  className="w-14 h-14 object-cover rounded-full border-2 border-[#f28e2b] shadow-[0_0_20px_rgba(242,142,43,0.8)] filter brightness-110"
                />
                <span className="text-[9px] font-black text-[#f28e2b] bg-black/90 px-2 py-0.5 rounded border border-zinc-800 mt-1 uppercase tracking-widest whitespace-nowrap">
                  DRANGO THAR
                </span>
              </div>
            </div>

            {/* 4 Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {steps.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    {/* Step Node Icon Container matching the user's uploaded mockup */}
                    <div className="w-16 h-16 rounded-2xl bg-zinc-950 border-2 border-[#f28e2b] text-[#f28e2b] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(242,142,43,0.25)] group-hover:scale-110 group-hover:border-white group-hover:text-white transition-all duration-300 mb-6 shrink-0 bg-black">
                      <IconComp size={24} />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-3">
                      <h3 className="text-sm md:text-base font-bold text-[#f28e2b] group-hover:text-white transition-colors uppercase tracking-wide">
                        {item.step}
                      </h3>
                      <p className="text-zinc-400 text-xs leading-relaxed max-w-xs mx-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };

const galleryItems = [
  {
    id: 1,
    title: "Climate Controlled Spray Booth",
    category: "PAINT BOOTH",
    desc: "Oven-baked multi-stage paint booth setup with climate control and zero dust filtration.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Chassis & Body Welding Work",
    category: "BODY SHOP",
    desc: "Heavy-duty chassis alignment, panel beating, and metal fabrication with spark protection.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Precision Rotary Buffer Polishing",
    category: "DETAILING",
    desc: "Multi-stage paint correction removing 99% of swirl marks, scratches, and oxidation.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Self-Healing TPU PPF Application",
    category: "PAINT PROTECTION",
    desc: "Optical clarity self-healing film installed in clean-room studio environment.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    title: "9H Hydrophobic Ceramic Coating",
    category: "COATING",
    desc: "Deep gloss retention and extreme water-repellency hydrophobic surface shield.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 6,
    title: "Sun Control Glass Tinting Studio",
    category: "TINTING",
    desc: "Ceramic heat rejection window tinting for maximum interior UV protection.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 7,
    title: "Satin Matte Custom Vinyl Wrap",
    category: "CUSTOMIZATION",
    desc: "Seamless full vehicle color transformation using high-grade removable film.",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 8,
    title: "Mahindra Thar Off-Road Armor Build",
    category: "ARMOR UPGRADES",
    desc: "Custom steel bumpers, auxiliary lighting, and suspension lift upgrades.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 9,
    title: "Luxury Leather Interior Deep Care",
    category: "INTERIOR",
    desc: "pH-neutral leather conditioning, steam extraction, and OEM interior preservation.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000"
  }
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const visibleItems = [
    galleryItems[activeIndex % galleryItems.length],
    galleryItems[(activeIndex + 1) % galleryItems.length],
    galleryItems[(activeIndex + 2) % galleryItems.length]
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0b0b0c] border-b border-zinc-900 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Section Header matching mockup typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
              OUR <span className="text-[#f28e2b]">GALLERY</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3 Cards Row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setLightboxImage(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-red-600 transition-all duration-500 ease-out shadow-2xl hover:shadow-[0_0_35px_rgba(239,68,68,0.45)] hover:-translate-y-2 cursor-pointer flex flex-col justify-end"
            >
              {/* Background Image with Scale Zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
              />

              {/* Shimmer Light Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

              {/* Center Maximize Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={20} />
                </span>
              </div>

              {/* Bottom Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Label Content */}
              <div className="relative z-20 p-5 space-y-1.5 transform group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-500 bg-red-950/60 border border-red-500/30 px-2.5 py-0.5 rounded inline-block">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white uppercase group-hover:text-red-400 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dash Indicators Matching User's Reference Screenshot */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {galleryItems.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to gallery slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  isActive
                    ? 'w-10 bg-[#f28e2b] shadow-[0_0_12px_#f28e2b]'
                    : 'w-5 bg-zinc-800 hover:bg-zinc-600'
                }`}
              />
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-bold text-red-500 tracking-widest uppercase">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase">
                  {lightboxImage.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {lightboxImage.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [tharLights, setTharLights] = useState(true);
    const [collabSubmitted, setCollabSubmitted] = useState(false);
    const [collabLoading, setCollabLoading] = useState(false);

    const handleCollabSubmit = (e) => {
      e.preventDefault();
      setCollabLoading(true);
      setTimeout(() => {
        setCollabLoading(false);
        setCollabSubmitted(true);
      }, 1200);
    };

    // Blinking headlight interval
    useEffect(() => {
      const blinkTimer = setInterval(() => {
        setTharLights((prev) => !prev);
      }, 1000);
      return () => clearInterval(blinkTimer);
    }, []);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slidesData.length);
      }, 6000);
      return () => clearInterval(timer);
    }, []);



    const stats = [
      { number: "8+", label: "Years Experience" },
      { number: "10,000+", label: "Vehicles Restored" },
      { number: "2.3M+", label: "YouTube Subscribers" },
      { number: "15+", label: "Pan India Stores" }
    ];

    const services = [
      {
        id: "ppf",
        title: "Paint Protection Film (PPF)",
        desc: "Protect your vehicle's paint from scratches, rock chips, and road debris with our ultra-durable self-healing TPU PPF.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "ceramic-coating",
        title: "Ceramic & Graphene Coating",
        desc: "Get an unmatched hydrophobic glass-like shine and 9H hardness protection that shields your car from chemical stains and UV rays.",
        icon: Sparkles,
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "panel-painting",
        title: "Panel Painting",
        desc: "Precision spot & panel color matching using computerized mixing and climate-controlled baking booths.",
        icon: Paintbrush,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "full-body-painting",
        title: "Full Body Painting",
        desc: "Complete luxury color overhaul with multi-stage clear coat and wet sanding for factory perfection.",
        icon: Award,
        image: "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "accidental-repair",
        title: "Insurance Accidental Repair",
        desc: "Full chassis alignment, panel beating, and hassle-free cashless insurance claim processing.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "peelable-paint",
        title: "Peelable Paint (Rubbershield)",
        desc: "Transform your car's look with high-gloss or matte peelable paint. 100% removable, leaving original OEM paint untouched.",
        icon: Paintbrush,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "glass-tinting",
        title: "Sun Control Film & Glass Tinting",
        desc: "High heat rejection ceramic window tinting for maximum privacy, clarity, and interior cooling.",
        icon: Sparkles,
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "sunroof-installation",
        title: "Sunroof Installation & Repair",
        desc: "OEM Webasto sunroof installation, leak repairs, and motor servicing for all luxury cars & SUVs.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "vinyl-wrap",
        title: "Vinyl Wrap & De-chroming",
        desc: "Custom color vinyl wraps, satin matte finishes, piano black de-chroming, and racing stripes.",
        icon: Paintbrush,
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "premium-detailing",
        title: "Premium Detailing & Polishing",
        desc: "Multi-stage paint correction, interior deep cleaning, leather conditioning, and engine bay detailing.",
        icon: Award,
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800"
      }
    ];

    const customizeVehicles = [
      { id: "mahindra-thar-roxx", name: "Mahindra Thar Roxx", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYxWEvT512B6xor9jxfKXbdJky7yK6mP-zigBO3ypqw&s=10" },
      { id: "mahindra-thar", name: "Mahindra Thar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaH6RldWbTtdxbqQLzOfWPOUvW7H9I7_0sdn56v18Kg&s=10" },
      { id: "suzuki-jimny", name: "Suzuki Jimny", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400" },
      { id: "toyota-hilux", name: "Toyota Hilux", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXodwTWYG_HshWCkDRgJHoceTYIYSezkrsiDekKkBnUQ&s=10" },
      { id: "isuzu-dmax", name: "Isuzu D-Max", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400" },
      { id: "toyota-fortuner", name: "Toyota Fortuner", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400" },
      { id: "mahindra-scorpio-n", name: "Mahindra Scorpio-N", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400" },
      { id: "mahindra-thar-crde", name: "Mahindra Thar CRDe", image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=400" },
      { id: "jeep-wrangler", name: "Jeep Wrangler", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400" },
      { id: "other-vehicles", name: "Other Vehicles", image: "https://images.unsplash.com/photo-1617469767053-d3b508a0d822?auto=format&fit=crop&q=80&w=400" },
      { id: "accessories", name: "Accessories", image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400" },
      { id: "line-x", name: "Line-X", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400" }
    ];


    const youtubeVideos = [
      {
        title: "Toyota Fortuner Full Conversion to Satin Black",
        views: "1.2M views",
        id: "dQw4w9WgXcQ", // Placeholder video ID, can be styled with play overlay
        thumbnail: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600"
      },
      {
        title: "Is PPF Worth it? Deep Analysis by Sachin & Lalit",
        views: "890K views",
        id: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600"
      },
      {
        title: "Premium Ceramic Coating on Brand New Mercedes E-Class",
        views: "650K views",
        id: "dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=600"
      }
    ];

    return (
      <div className="bg-[#0b0b0c] text-white font-sans">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="flex h-full w-[400%] transition-transform duration-1000 ease-in-out"
              style={{ transform: `translate3d(-${currentSlide * 25}%, 0, 0)` }}
            >
              {slidesData.map((slide, index) => (
                <div key={index} className="w-1/4 h-full relative shrink-0">
                  <img
                    src={slide.image}
                    alt={slide.tagline}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-black/25 pointer-events-none"></div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {slidesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-350 ${index === currentSlide ? 'bg-red-600 w-8' : 'bg-zinc-600/80 hover:bg-zinc-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Brand Partners Section */}
        <section className="py-6 bg-[#0b0b0c] overflow-hidden font-sans border-b border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-[#121213] rounded-full py-3.5 px-6 md:px-8 flex items-center gap-6 border border-zinc-800/40 relative overflow-hidden">
              {/* Left Static Header */}
              <div className="flex items-center gap-5 shrink-0 z-10 bg-[#121213]">
                <h3 className="font-sans font-black text-xs md:text-sm tracking-wider text-white uppercase select-none whitespace-nowrap">
                  OUR BRAND <span className="text-[#f28e2b]">PARTNERS</span>
                </h3>
                <div className="w-[1.5px] h-6 bg-zinc-800" />
              </div>

              {/* Right Infinite Scrolling Area */}
              <div className="overflow-hidden w-full relative flex items-center select-none mask-gradient-x">
                <div className="animate-brand-marquee gap-10 items-center">
                  {/* Render brands list twice for seamless looping */}
                  {[...Array(2)].map((_, loopIdx) => (
                    <React.Fragment key={loopIdx}>
                      {brandPartners.map((brand, idx) => (
                        <div
                          key={`${loopIdx}-${idx}`}
                          className="shrink-0 flex items-center justify-center min-w-[120px]"
                        >
                          {brand.svg}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style>{`
          @keyframes brand-marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-brand-marquee {
            display: flex;
            width: max-content;
            animation: brand-marquee 25s linear infinite;
          }
          .animate-brand-marquee:hover {
            animation-play-state: paused;
          }
          .mask-gradient-x {
            mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          }
        `}</style>
        </section>

        {/* Stats Counter Section */}
        <section className="bg-zinc-950 border-b border-zinc-900 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-4xl md:text-5xl font-black text-white bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter value={stat.number} />
                  </p>
                  <p className="text-xs md:text-sm font-bold tracking-widest text-zinc-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Founders Section */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <img
                src="https://cdn.pixabay.com/photo/2023/02/17/16/25/man-7796384_960_720.jpg"
                alt="Drango Founders"
                className="rounded-xl border border-zinc-800 shadow-2xl brightness-90"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
                MEET THE TEAM
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wide text-white leading-tight">
                THE BROTHERS BEHIND THE BRAND
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Founded by <strong>Sachin Choudhary</strong> and <strong>Lalit Choudhary</strong>, Drango started with a simple vision: to bring world-class car detailing standards to India. What began as a passionate workshop in Pune has now grown into a nationwide revolution, trusted by millions of car enthusiasts.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our founders run India's most viewed car detailing channel on YouTube, sharing transparent, expert-led educational content about paint protection, detailing myths, and authentic restorations.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 group text-sm font-bold tracking-wider text-red-500 hover:text-red-400 uppercase transition-colors"
                >
                  <span>Read Our Story</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bimbra-style Customize Vehicles Section (OUR PROCESS) */}
        <section className="bg-white py-20 text-zinc-900 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">

            {/* Section Header */}
            <div className="text-center mb-16 flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-zinc-800">
                OUR PROCESS
              </h2>
              <div className="w-12 h-[2px] bg-orange-500 mt-3"></div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              {customizeVehicles.map((vehicle, idx) => (
                <Link
                  key={idx}
                  to={`/vehicles/${vehicle.id}`}
                  className="group flex flex-col items-center justify-center text-center relative"
                >
                  {/* Splatter Background and Car Container */}
                  <div className="w-64 h-48 relative flex items-center justify-center mb-4 select-none">
                    {/* Paint Splatter SVG */}
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0 w-full h-full text-zinc-100 fill-current group-hover:text-orange-50/70 transition-colors duration-500 transform group-hover:scale-105"
                    >
                      <path d="M38.2,-55.3C49.8,-50.2,59.8,-40.5,65.6,-28.5C71.3,-16.4,72.8,-2,68.9,10.7C65,23.3,55.8,34.2,45.2,43.2C34.5,52.2,22.3,59.3,8.7,62.8C-4.9,66.3,-19.9,66.1,-33.1,60.8C-46.3,55.5,-57.8,45,-64.3,32.2C-70.8,19.3,-72.4,4.2,-68.8,-9.5C-65.3,-23.3,-56.6,-35.6,-45.6,-41C-34.6,-46.3,-21.3,-44.7,-8.9,-48.8C3.5,-52.9,26.5,-60.4,38.2,-55.3Z" transform="translate(50 50)" />
                    </svg>

                    {/* Styled Rounded Card Image */}
                    <div className="w-48 h-32 rounded-xl overflow-hidden relative z-10 border border-zinc-200/80 shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Vehicle Label */}
                  <h3 className="text-sm font-semibold tracking-wide text-zinc-700 group-hover:text-orange-500 transition-colors duration-300">
                    {vehicle.name}
                  </h3>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* What We Do / Premium Services Section - Matching Reference Mockup */}
        <section className="py-16 md:py-24 bg-[#0b0b0c] border-y border-zinc-900 overflow-hidden font-sans">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">

            {/* Header matching reference mockup layout */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-zinc-900/80 pb-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded text-[11px] font-black tracking-widest text-white uppercase select-none">
                  <span className="w-2 h-2 rounded-sm bg-red-600 animate-pulse" />
                  <span>WHAT WE DO</span>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
                  CHOOSE FROM A RANGE OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-500">PREMIUM SERVICES</span>
                </h2>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
                At Drango, we provide super car correction, paint protection and detailing services to enhance your car's appearance and protect it from daily wear and tear. Our body shop handles repairs for minor and major accidents. Off-road customisation options for outdoor-seekers and overall, we add a personalised touch, experience holistic vehicle care with precision and attention to detail.
              </p>
            </div>

            {/* 10 Services Grid (2 Rows x 5 Columns on Desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-5">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  to={`/services/${service.id}`}
                  className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-red-600 transition-all duration-500 ease-out shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.45)] hover:-translate-y-2 flex flex-col justify-end"
                >
                  {/* Background Image with Zoom */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                  />

                  {/* Shimmer Light Sweep Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

                  {/* Bottom Dark Gradient for crisp text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Right Mini Red Arrow Badge */}
                  <div className="absolute top-2.5 right-2.5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-md">
                      <ChevronRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Card Title at Bottom Left */}
                  <div className="relative z-20 p-3.5 md:p-4 space-y-1.5 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-[11px] md:text-xs font-bold uppercase tracking-wide text-zinc-100 group-hover:text-red-400 transition-colors leading-tight line-clamp-2">
                      {service.title}
                    </h3>
                    <div className="w-6 h-[2px] bg-red-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - Matching Reference Mockup */}
        <GallerySection />

        {/* Featured Products Section */}
        <section className="py-20 md:py-28 bg-[#0b0b0c] border-b border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
                STORE ACCESSORIES
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
                FEATURED PRODUCTS
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                Engineered by Drango, our premium line of Barricade products ensures your vehicle keeps its showroom shine at home.
              </p>
            </div>

            <style>{`
            @keyframes marquee-scroll {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .animate-marquee-slow {
              display: flex;
              width: max-content;
              animation: marquee-scroll 25s linear infinite;
            }
            .animate-marquee-slow:hover {
              animation-play-state: paused;
            }
          `}</style>

            <div className="overflow-hidden w-full relative py-4 mask-gradient-x">
              <div className="animate-marquee-slow gap-8">
                {/* Render products twice for seamless infinite scrolling loop */}
                {[...Array(2)].map((_, loopIdx) => (
                  <React.Fragment key={loopIdx}>
                    {[
                      {
                        name: "Barricade Matte & Gloss Shampoo",
                        category: "WASH & CLEAN",
                        desc: "PH-neutral high-lubricity foam formula that removes road grime safely without stripping existing layers.",
                        price: "₹699",
                        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400"
                      },
                      {
                        name: "Barricade SiO2 Ceramic Spray",
                        category: "PROTECT & SHINE",
                        desc: "Advanced silica spray detailer providing instant hydrophobic sheeting and up to 3 months of protection.",
                        price: "₹1,299",
                        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400"
                      },
                      {
                        name: "Barricade Edgeless Microfiber",
                        category: "ACCESSORIES",
                        desc: "800 GSM ultra-dense dual pile design optimized for scratch-free buffing, wax removal, and drying.",
                        price: "₹450",
                        image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=400"
                      }
                    ].map((prod, idx) => (
                      <div
                        key={`${loopIdx}-${idx}`}
                        className="w-72 md:w-80 shrink-0 bg-zinc-900/60 border border-zinc-850 rounded-xl overflow-hidden group hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative aspect-square overflow-hidden bg-zinc-950">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            />
                            <span className="absolute top-4 left-4 bg-red-600 text-white font-extrabold text-[9px] tracking-widest px-2.5 py-1 rounded">
                              {prod.category}
                            </span>
                          </div>
                          <div className="p-6 space-y-3">
                            <h3 className="text-base font-bold text-white uppercase group-hover:text-red-500 transition-colors">
                              {prod.name}
                            </h3>
                            <p className="text-zinc-400 text-xs leading-relaxed">
                              {prod.desc}
                            </p>
                          </div>
                        </div>
                        <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-850/50 mt-4">
                          <span className="text-red-500 font-extrabold text-base">{prod.price}</span>
                          <Link
                            to="/products"
                            className="text-white hover:text-red-500 text-xs font-bold tracking-widest uppercase transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-red-500 hover:text-red-400 uppercase transition-colors"
              >
                <span>Explore Full Store</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* YouTube Showcase Section */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
              YOUTUBE CHANNEL
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
              LATEST VLOGS & CONVERSIONS
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Witness the transformations ourselves. We document the absolute limits of detailing and premium car restoration on our YouTube channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {youtubeVideos.map((video, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden group hover:border-red-600/50 transition-colors">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={20} fill="white" className="ml-1" />
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-red-500 transition-colors line-clamp-2 leading-relaxed">
                    {video.title}
                  </h4>
                  <p className="text-xs text-zinc-500">{video.views}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://youtube.com/@Drango"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest px-6 py-3.5 rounded transition-colors uppercase"
            >
              <Youtube size={16} />
              <span>Visit YouTube Channel</span>
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-zinc-950 py-20 md:py-28 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
                REVIEWS
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
                WHAT OUR CLIENTS SAY
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Mehra",
                  car: "Fortuner Owner",
                  comment: "Excellent service. Lalit & Sachin guided me transparently. The TPU PPF application is flawless and self-healed some scratches just like they showed in their vlogs."
                },
                {
                  name: "Ananya Iyer",
                  car: "Hyundai Creta Owner",
                  comment: "Got a custom premium paint job and Ceramic Coating. The shine is incredible! It feels brand new, even though my car is 5 years old. Strongly recommended."
                },
                {
                  name: "Vikram Malhotra",
                  car: "BMW 3 Series Owner",
                  comment: "Highly professional team. They took care of every detail, from the exhaust tips to the interior leather protection. Drango is definitely worth every penny."
                }
              ].map((review, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-xl relative">
                  <div className="flex gap-1 text-red-500 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
                    "{review.comment}"
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-base">{review.name}</h4>
                    <p className="text-zinc-500 text-xs mt-0.5">{review.car}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="py-16 bg-[#0b0b0c] border-t border-zinc-900 overflow-hidden font-sans">
          <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
                ASSOCIATED BRANDS
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-wide">
                OUR TRUSTED CLIENTS & CARMAKERS
              </h2>
            </div>
          </div>

          <style>{`
          @keyframes client-marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-client-scroll {
            display: flex;
            width: max-content;
            animation: client-marquee 30s linear infinite;
          }
          .animate-client-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

          {/* Orange rounded container wrapper */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-[#f28e2b] rounded-3xl py-6 px-4 relative w-full overflow-hidden">
              <div className="animate-client-scroll gap-6">
                {/* Render client companies twice for seamless loop */}
                {[...Array(2)].map((_, loopIdx) => (
                  <React.Fragment key={loopIdx}>
                    {[
                      {
                        name: "MAHINDRA",
                        logoUrl: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/12/18/431639/154443/mahindra_logo_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3028691.webp"
                      },
                      {
                        name: "TOYOTA",
                        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota_logo.svg/512px-Toyota_logo.svg.png"
                      },
                      {
                        name: "SUZUKI",
                        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/512px-Suzuki_logo_2.svg.png"
                      },
                      {
                        name: "ISUZU",
                        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Isuzu_logo.svg/512px-Isuzu_logo.svg.png"
                      },
                      {
                        name: "JEEP",
                        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jeep_logo.svg/512px-Jeep_logo.svg.png"
                      },
                      {
                        name: "TATA MOTORS",
                        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Tata_logo.svg/512px-Tata_logo.svg.png"
                      },
                      {
                        name: "HYUNDAI",
                        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/512px-Hyundai_Motor_Company_logo.svg.png"
                      },
                      {
                        name: "HONDA",
                        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/512px-Honda_Logo.svg.png"
                      },
                      {
                        name: "BMW",
                        logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipRJprDGsVFSVQmb088DICEgLJHc9L5ZsJiKkKW_PGUa5Ett9t5LqNds&s=10"
                      },
                      {
                        name: "MERCEDES-BENZ",
                        logoUrl: "https://images.seeklogo.com/logo-png/19/2/mercedes-benz-logo-png_seeklogo-190348.png"
                      }
                    ].map((client, idx) => (
                      <div
                        key={`${loopIdx}-${idx}`}
                        className="w-48 h-20 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-default select-none shrink-0 group hover:shadow-md p-4"
                      >
                        <img
                          src={client.logoUrl}
                          alt={client.name}
                          className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section className="py-20 bg-zinc-950/50 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-1.5">
                <InstagramIcon size={14} /> INSTAGRAM REELS
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
                FOLLOW THE MOVEMENT
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                Get behind-the-scenes access to daily detailing builds, paint correction clips, and client delivery reactions.
              </p>
            </div>

            {/* 5 Reels Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                {
                  title: "Thar Roxx Matte Metal Transformation 🖤",
                  views: "320K views",
                  image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400"
                },
                {
                  title: "Hydrophobic Water Sheeting Test on 9H Ceramic 💦",
                  views: "480K views",
                  image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400"
                },
                {
                  title: "Custom Red Alloys Wheel Unboxing! 🎯",
                  views: "150K views",
                  image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400"
                },
                {
                  title: "Mirror Polish Finish on Midnight Blue Sedan ✨",
                  views: "510K views",
                  image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=400"
                },
                {
                  title: "Satisfying PPF Film Peeling & Application! 🔍",
                  views: "720K views",
                  image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=400"
                }
              ].map((reel, idx) => (
                <a
                  key={idx}
                  href="https://instagram.com/drango"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[9/16] rounded-xl overflow-hidden group border border-zinc-850 hover:border-red-600/50 transition-all duration-300 shadow-md block"
                >
                  {/* Background Image */}
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-50"
                  />

                  {/* Reels Overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-end">
                      <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center border border-white/10">
                        <InstagramIcon size={14} />
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                        <Play size={14} fill="white" className="ml-0.5" />
                      </span>
                      <h4 className="text-xs md:text-sm font-bold text-white leading-snug line-clamp-3">
                        {reel.title}
                      </h4>
                      <p className="text-[10px] text-zinc-400 font-medium">
                        {reel.views}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Follow Us Button */}
            <div className="text-center mt-12">
              <a
                href="https://instagram.com/drango"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest px-8 py-4 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] uppercase"
              >
                <InstagramIcon size={16} />
                <span>Follow Us on Instagram</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Process Section */}
        <ContactProcessSection />

        {/* Collab & Headlights Section */}
        <section className="py-20 md:py-28 bg-[#060607] border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Thar Silhouette & Interactive Lights */}
              <div className="lg:col-span-5 space-y-6">
                <TharSilhouette
                  lightsOn={tharLights}
                  toggleLights={() => setTharLights(!tharLights)}
                />
              </div>

              {/* Right Side: Collab Form */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
                  WANT TO <span className="text-red-500">COLLAB</span> WITH US?
                </h2>

                {collabSubmitted ? (
                  <div className="bg-zinc-900/50 border border-red-500/20 p-8 rounded-xl text-center space-y-4">
                    <div className="w-12 h-12 bg-red-600/10 text-red-500 flex items-center justify-center rounded-full mx-auto">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase">Submission Successful!</h3>
                    <p className="text-zinc-400 text-sm">
                      Thank you for your interest in collaborating with Drango. Our partnership team will review your details and contact you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleCollabSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        required
                        className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500 focus:outline-none py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email ID"
                        className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500 focus:outline-none py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500 focus:outline-none py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Industry"
                        className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500 focus:outline-none py-3 text-sm text-white placeholder-zinc-600 transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Message"
                        rows={3}
                        className="w-full bg-transparent border-b border-zinc-800 focus:border-red-500 focus:outline-none py-3 text-sm text-white placeholder-zinc-600 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={collabLoading}
                        className="bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 text-white font-bold text-xs tracking-widest px-8 py-4 rounded transition-all duration-300 uppercase shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] flex items-center gap-2"
                      >
                        {collabLoading ? (
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                          <span>SUBMIT</span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default Home; 
