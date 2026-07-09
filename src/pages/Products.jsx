import React from 'react';
import { ShoppingBag, Star, Shield, HelpCircle, ShoppingCart } from 'lucide-react';

const productsList = [
  {
    name: "Barricade Premium Car Shampoo",
    category: "Washing",
    price: "₹699",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400",
    desc: "pH-neutral high-foaming car wash shampoo. Safely removes road grime without stripping waxes or ceramic coatings."
  },
  {
    name: "Barricade 800 GSM Microfiber Cloth",
    category: "Accessories",
    price: "₹499",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=400",
    desc: "Ultra-thick dual pile microfiber towel. Ideal for waterless washing, buffing wax, and streak-free drying."
  },
  {
    name: "Barricade Ultra Shine Tyre Dresser",
    category: "Wheels & Tyres",
    price: "₹599",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400",
    desc: "Long-lasting tyre shine gel. Provides a deep rich black gloss that prevents rubber fading, cracking, and browning."
  },
  {
    name: "Barricade Glass Cleaner (Streak-Free)",
    category: "Glass Care",
    price: "₹399",
    rating: 5,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400",
    desc: "Professional strength glass cleaning spray. Quickly cuts through grease, smoke film, and insect splatter."
  }
];

const Products = () => {
  return (
    <div className="bg-[#0b0b0c] text-white font-sans">
      {/* Header */}
      <section className="relative py-20 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">BARRICADE PRODUCTS</h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Explore Drango's custom line of professional-grade DIY car care products to keep your vehicle looking pristine.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsList.map((prod, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-red-600 transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-zinc-950">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase px-2 py-1 rounded">
                  {prod.category}
                </span>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex gap-0.5 text-red-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <h3 className="font-bold text-base text-white uppercase line-clamp-1 group-hover:text-red-500 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xl font-bold text-white">{prod.price}</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] tracking-widest px-4 py-2.5 rounded transition-colors flex items-center gap-1.5 uppercase">
                    <ShoppingCart size={12} />
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
