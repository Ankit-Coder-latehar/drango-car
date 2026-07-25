import React, { useState } from 'react';
import { ShoppingBag, Star, Shield, HelpCircle, ShoppingCart, Filter, CheckCircle2, Sparkles } from 'lucide-react';
import BarricadeHeroSlideshow from '../components/products/BarricadeHeroSlideshow';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

const productsList = [
  {
    id: 1,
    name: "Barricade Heavy-Duty Thar Front Bumper",
    category: "Off-Road & Armor",
    price: "₹34,999",
    rating: 5,
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=400",
    desc: "Winch-compatible heavy-duty steel front bumper built specifically for Mahindra Thar Roxx & 4x4 models with fog lamp mounts."
  },
  {
    id: 2,
    name: "Barricade Self-Healing TPU PPF Shield",
    category: "Paint Protection Film",
    price: "₹18,499",
    rating: 5,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400",
    desc: "200-micron self-healing clear TPU film roll. Hydrophobic stain resistance and self-healing thermal scratch recovery."
  },
  {
    id: 3,
    name: "Barricade 9H Graphene Ceramic Coating Kit",
    category: "Chemicals & Accessories",
    price: "₹3,499",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400",
    desc: "Professional dual-layer 9H Graphene nano coating. Provides high-gloss hydrophobic shine and 5-year scratch durability."
  },
  {
    id: 4,
    name: "Barricade Matrix DRL LED Light Pods",
    category: "Lighting & Electrical",
    price: "₹8,999",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400",
    desc: "High-intensity smoked Matrix LED projector light pods for Thar front grille & roof rack setups."
  },
  {
    id: 5,
    name: "Barricade Premium Car Shampoo",
    category: "Chemicals & Accessories",
    price: "₹699",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400",
    desc: "pH-neutral high-foaming car wash shampoo. Safely removes road grime without stripping waxes or ceramic coatings."
  },
  {
    id: 6,
    name: "Barricade 800 GSM Microfiber Cloth",
    category: "Chemicals & Accessories",
    price: "₹499",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=400",
    desc: "Ultra-thick dual pile microfiber towel. Ideal for waterless washing, buffing wax, and streak-free drying."
  },
  {
    id: 7,
    name: "Barricade Ultra Shine Tyre Dresser",
    category: "Chemicals & Accessories",
    price: "₹599",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400",
    desc: "Long-lasting tyre shine gel. Provides a deep rich black gloss that prevents rubber fading, cracking, and browning."
  },
  {
    id: 8,
    name: "Barricade Glass Cleaner (Streak-Free)",
    category: "Chemicals & Accessories",
    price: "₹399",
    rating: 5,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400",
    desc: "Professional strength glass cleaning spray. Quickly cuts through grease, smoke film, and insect splatter."
  }
];

const CATEGORIES = [
  'All Products',
  'Off-Road & Armor',
  'Paint Protection Film',
  'Chemicals & Accessories',
  'Lighting & Electrical'
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products'
    ? productsList
    : productsList.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#080809] text-white font-sans selection:bg-red-600 selection:text-white min-h-screen">
      {/* Top Banner Section */}
      <section className="pt-10 md:pt-16 pb-12 max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles size={14} />
            <span>OFFICIAL DRANGO BARRICADE LINE</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-wider">
            BARRICADE PRODUCTS
          </h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Professional DIY detailing chemicals, off-road armor packages, and custom Mahindra Thar styling gear engineered by Drango.
          </p>
        </div>

        {/* HERO SLIDESHOW BANNER (FORD RANGER STYLE ADAPTED FOR MAHINDRA THAR) */}
        <BarricadeHeroSlideshow onSelectCategory={(cat) => setSelectedCategory(cat)} />
      </section>

      {/* Main Products Catalogue Grid */}
      <section id="barricade-products-grid" className="py-12 max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-850 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 uppercase">
            <Filter size={16} className="text-red-500" />
            <span>Filter By Category:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playClickSound();
                    setSelectedCategory(cat);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    active
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id} 
              onMouseEnter={playHoverSound}
              className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-red-600 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-950">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md shadow">
                  {prod.category}
                </span>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                    <span className="text-[11px] font-mono font-bold text-zinc-400 ml-1.5">
                      ({prod.rating})
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white uppercase line-clamp-1 group-hover:text-red-500 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-850 flex items-center justify-between">
                  <span className="text-xl font-bold font-mono text-white">{prod.price}</span>
                  <button 
                    onClick={playClickSound}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] tracking-widest px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 uppercase shadow-md active:scale-95"
                  >
                    <ShoppingCart size={13} />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
