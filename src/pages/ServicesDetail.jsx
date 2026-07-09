import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, Check, Info, Award, ArrowLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const serviceData = {
  'ppf': {
    title: "Paint Protection Film (PPF)",
    tagline: "The ultimate shield against chips, scratches, and elements.",
    bgImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200",
    desc: "Paint Protection Film (PPF) is a thick, transparent thermoplastic polyurethane (TPU) layer applied to your car's painted surfaces. It protects against stone chips, bug splatters, bird droppings, minor abrasions, and swirl marks caused by improper washing.",
    features: [
      "Instant Self-Healing under heat (sunlight or hot water)",
      "High Gloss or Matte stealth finishes available",
      "Stain & Chemical Resistance against bird droppings and road salts",
      "Non-Yellowing TPU material with up to 10 years warranty",
      "Retains high resale value of your vehicle"
    ],
    process: [
      "Decontamination wash & clay bar treatment to remove paint pollutants.",
      "Single-stage or multi-stage paint correction (rubbing/polishing) to ensure scratch-free surface.",
      "Custom pre-cut computer patterns or custom bulk installation for invisible edges.",
      "Precision squeezing and heat-sealing of all film edges.",
      "Final inspection under high-intensity detailing lights."
    ]
  },
  'ceramic-coating': {
    title: "Ceramic Coating",
    tagline: "Liquid glass protection for high-gloss shine and ease of washing.",
    bgImage: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1200",
    desc: "Ceramic Coating is a chemical polymer solution that is applied by hand to the exterior of a vehicle. It chemically bonds with the vehicle's factory paint, creating a sacrificial nano-ceramic layer of protection that repels dust, mud, and water.",
    features: [
      "Superior Hydrophobic Effect (water sheets off instantly)",
      "Deep Wet-Gloss Showroom Shine",
      "UV protection preventing paint oxidation and fading",
      "9H / 10H Hardness shielding from minor wash swirls",
      "Reduces dirt accumulation, making washing exceptionally easy"
    ],
    process: [
      "Deep wash, iron decontamination, and clay prep.",
      "Thorough multi-stage paint correction to get rid of 90%+ paint defects.",
      "Surface wipe down with IPA (isopropyl alcohol) to clean polishing oils.",
      "Even application of ceramic base-coat and top-coat layers.",
      "Infrared curing to bond the coating to the clear coat."
    ]
  },
  'peelable-paint': {
    title: "Peelable Paint (Rubbershield)",
    tagline: "Temporary color changes with OEM paint protection.",
    bgImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200",
    desc: "Peelable Paint, also known as Rubbershield, is a specialized, sprayable paint system. It gives the exact look, texture, and finish of a real automotive paint job, but it can be peeled off completely like a wrap when you want to revert to original paint.",
    features: [
      "Infinite Custom Colors (gloss, satin, metallic, matte)",
      "Zero Orange Peel - looks exactly like professional factory paint",
      "Twice as thick as standard vinyl wraps - superior rock chip protection",
      "100% reversible with no residue left on factory paint",
      "Can be polished, waxed, and ceramic coated"
    ],
    process: [
      "Thorough cleaning and panel dismantling (badges, lights, trim).",
      "Masking of non-paint areas (glass, wheels, radiator).",
      "Spraying 4-5 layers of transparent protective base-coat.",
      "Spraying 3 layers of premium custom color paint.",
      "Spraying 2 layers of protective automotive clear coat followed by curing in our paint booth."
    ]
  },
  'premium-paint': {
    title: "Premium Paint Job",
    tagline: "Oven-baked professional paint finishes matching factory standards.",
    bgImage: "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=1200",
    desc: "Our premium paint jobs utilize state-of-the-art Italian blow-therm paint booths, premium basecoats (Glasurit/Nippon), and high-solid clearcoats. We ensure 100% color matching and a dust-free baking process that cures the paint to maximum longevity.",
    features: [
      "Professional Italian downdraft heated paint booth",
      "Computerized color matching system",
      "High-solid scratch-resistant clear coats for deep shine",
      "Anti-rust epoxy primers applied to bare metal",
      "3-Year warranty against paint peeling or bubbling"
    ],
    process: [
      "Dismantling of panels, dent pulling, and surface leveling.",
      "Applying premium body filler and sanding to achieve factory body lines.",
      "Epoxy primer application to protect against rust.",
      "Basecoat color painting inside the dust-free oven booth.",
      "Clearcoat application followed by 60°C bake curing for 45 minutes."
    ]
  },
  'interior-detailing': {
    title: "Interior Detailing",
    tagline: "Restore that new-car smell and pristine cabin feel.",
    bgImage: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=1200",
    desc: "We deep-clean every corner of your cabin. Using specialized steam extractors and pH-neutral cleaners, we sanitize seats, carpets, headliners, and vents, followed by leather conditioning and plastic dressing.",
    features: [
      "Steam cleaning kills 99.9% of bacteria and allergens",
      "Fabric extraction removes deep-seated dirt, food stains, and oils",
      "Premium leather feeding stops drying and cracking",
      "Ozone treatment neutralizes cabin odors and mold",
      "Non-greasy interior dressings for factory matte finish"
    ],
    process: [
      "Vacuuming, trunk clean, and floor mat extraction.",
      "Roof lining cleaning and seat stain removal.",
      "Console, vents, and dashboard detail using fine brushes and steam.",
      "Glass cleaning and leather/vinyl hydration.",
      "Ozone machine odor elimination cycle."
    ]
  },
  'denting-painting': {
    title: "Denting & Painting",
    tagline: "Fix scratches and major dents with seamless finish.",
    bgImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200",
    desc: "Scratched or dented your car? We provide expert body shop repair services. From minor bumper scratches to major panel damage, our metal pulls, filler prep, and painting match your factory panels exactly.",
    features: [
      "Spot repairs avoid the cost of painting whole panels",
      "Precise computerized paint matching",
      "Insurance claim support and paperless processing",
      "Heavy duty dent pullers preserve metal strength",
      "Oven baked finish prevents future color mismatch"
    ],
    process: [
      "Dent evaluation and metal pulling.",
      "Panel leveling, rust prevention, and sanding.",
      "Oven booth painting and clearcoat matching.",
      "Buffing and polishing to match adjacent panels."
    ]
  },
  'custom-modification': {
    title: "Custom Modification",
    tagline: "De-chroming, body kits, caliper paint, and styling upgrades.",
    bgImage: "https://images.unsplash.com/photo-1617469767053-d3b508a0d822?auto=format&fit=crop&q=80&w=1200",
    desc: "Give your car a custom, unique character. We offer comprehensive cosmetic modification packages including full black-out styling, brake caliper painting, custom alloy wheels, premium body kit installations, and spoiler installs.",
    features: [
      "Full Gloss/Satin Black De-chroming (badges, grills, window trim)",
      "High temperature caliper paint in custom colors (Red, Yellow, Neon)",
      "Premium imported body kits and spoiler installations",
      "Custom ambient lighting and audio system upgrades",
      "Alloy wheel painting and styling"
    ],
    process: [
      "Consultation on styling preferences and rendering.",
      "Part dismantling and surface preparation.",
      "Painting, wrapping, or custom molding of accessories.",
      "Precise fitment and safety checks."
    ]
  }
};

const ServicesDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId] || serviceData['ppf']; // Fallback

  return (
    <div className="bg-[#0b0b0c] text-white font-sans">
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.bgImage} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl space-y-3">
          <Link to="/" className="inline-flex items-center gap-1 text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-widest mb-4 transition-colors">
            <ArrowLeft size={12} /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white">
            {service.title}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-medium max-w-xl mx-auto">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">Service Overview</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              {service.desc}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-zinc-900 border border-zinc-850 p-4 rounded-lg">
                  <Check size={18} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-xs md:text-sm font-semibold">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Timeline */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">Our Execution Process</h2>
            <div className="space-y-4 relative border-l border-zinc-800 pl-6 ml-3">
              {service.process.map((step, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full bg-red-600 border-4 border-[#0b0b0c] text-white flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Sidebar */}
        <div className="lg:col-span-5">
          <ContactForm 
            title="Book This Service" 
            subtitle={`Fill the form to book our signature ${service.title} service.`} 
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;
