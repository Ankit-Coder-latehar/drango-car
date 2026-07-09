import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import { Shield, Sparkles, Paintbrush, Award, Users, MapPin, Star, Play, CheckCircle2, ChevronRight } from 'lucide-react';
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

const slidesData = [
  {
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1920",
    tagline: "INDIA'S MOST POPULAR AUTO DETAILING BRAND",
    title: <>REFINE. PROTECT. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">RESTORE.</span></>,
    desc: "Get premium Paint Protection Film (PPF), high-end Ceramic Coating, custom body shop painting, and interior restoration from India's trusted automotive specialists."
  },
  {
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1920",
    tagline: "ADVANCED NANO-TECHNOLOGY CERAMIC COATING",
    title: <>LIQUID GLASS <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">9H SHINE.</span></>,
    desc: "Achieve unmatched gloss, extreme hydrophobicity, and chemical paint protection for your luxury vehicles."
  },
  {
    image: "https://i.pinimg.com/736x/61/a0/7b/61a07b60eb9c238a7905e837f1380f40.jpg", // Mahindra Thar style off-roader
    tagline: "MAHINDRA THAR ARMOR & MACHINERY UPGRADES",
    title: <>THAR RUGGED <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">PROTECTION.</span></>,
    desc: "Equip your Thar with off-road armor packages, self-healing TPU PPF protection, custom bumpers, suspension elements, and rugged aesthetic upgrades."
  },
  {
    image: "https://images.financialexpressdigital.com/2022/05/2022-Mahindra-Scorpio-N-1-1.jpg", // Mahindra Scorpio style SUV
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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const taglineRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      [taglineRef.current, titleRef.current, descRef.current, buttonsRef.current],
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', overwrite: 'auto' }
    );
  }, [currentSlide]);



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
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      desc: "Get an unmatched hydrophobic glass-like shine and 9H hardness protection that shields your car from chemical stains and UV rays.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "peelable-paint",
      title: "Peelable Paint (Rubbershield)",
      desc: "Transform your car's look with high-gloss or matte peelable paint. 100% removable, leaving original OEM paint untouched.",
      icon: Paintbrush,
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "premium-paint",
      title: "Premium Paint Job",
      desc: "Say goodbye to scratches and wear. Restore your car's exterior to factory showroom finish with our professional oven-baked paint booth.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=600"
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
                  className="w-full h-full object-cover opacity-40 brightness-90"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-black/65 pointer-events-none"></div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-350 ${index === currentSlide ? 'bg-red-600 w-8' : 'bg-zinc-600 hover:bg-zinc-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 text-left px-6 md:px-16 lg:px-24 w-full max-w-7xl transition-all duration-500">
          <span ref={taglineRef} className="text-red-500 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 block">
            {slidesData[currentSlide].tagline}
          </span>
          <h1 ref={titleRef} className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-6">
            {slidesData[currentSlide].title}
          </h1>
          <p ref={descRef} className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            {slidesData[currentSlide].desc}
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest px-8 py-4 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] uppercase text-center"
            >
              Book Appointment
            </Link>
            <Link
              to="/services/ppf"
              className="bg-transparent hover:bg-white/5 border border-zinc-700 hover:border-zinc-500 text-white font-bold text-xs tracking-widest px-8 py-4 rounded transition-colors uppercase text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
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

      {/* Services Grid Section */}
      <section className="bg-zinc-950/50 py-20 md:py-28 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
              WHAT WE DO
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
              OUR DETAILING SERVICES
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We offer premium detailing, protection, and restoration solutions tailored to the needs of every car enthusiast and daily driver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div key={idx} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-600 transition-all duration-300">
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white p-3 rounded-lg">
                      <IconComponent size={20} />
                    </div>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold uppercase text-white group-hover:text-red-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-red-500 group-hover:text-red-400 uppercase transition-colors"
                    >
                      <span>Read More</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* Enquiry Banner Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wide">
              READY FOR A TRANSFORMATION?
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              Fill out our query form and our store specialists will assist you with quotes, booking availability, and recommend the best detailing products for your car.
            </p>
            <ul className="space-y-4">
              {[
                "100% Genuine TPU PPF materials",
                "Advanced oven-baked paint booth",
                "Self-healing scratch protection layers",
                "Nationwide franchise warranty support"
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
