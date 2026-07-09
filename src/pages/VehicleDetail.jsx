import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, Phone, Send } from 'lucide-react';

const nameMappings = {
  'mahindra-thar-roxx': "Mahindra Thar Roxx",
  'mahindra-thar': "Mahindra Thar",
  'suzuki-jimny': "Suzuki Jimny",
  'toyota-hilux': "Toyota Hilux",
  'isuzu-dmax': "Isuzu D-Max",
  'toyota-fortuner': "Toyota Fortuner",
  'mahindra-scorpio-n': "Mahindra Scorpio-N",
  'mahindra-thar-crde': "Mahindra Thar CRDe",
  'jeep-wrangler': "Jeep Wrangler",
  'other-vehicles': "Other Vehicles",
  'accessories': "Accessories",
  'line-x': "Line-X"
};

const categories = [
  {
    name: "EXTERIORS",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "INTERIORS",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "LIGHTS",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "PERFORMANCE & SUSPENSION",
    image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "OFF-ROAD & EXPEDITION",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600"
  }
];

const exteriorSubcategories = [
  {
    name: "FRONT BUMPER",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "REAR BUMPER",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "FRONT GRILL",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "SIDE STEPS",
    image: "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "WHEELS",
    image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "MISCELLANEOUS",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400"
  }
];

const frontBumpers = [
  {
    name: "THAR ROXX PROMAN MARK-II ADAS METAL BUMPER",
    price: "₹ 45490",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    name: "THAR ROXX BIMBRA ADAS METAL BUMPER - MODEL X",
    price: "₹ 36990",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    name: "THAR ROXX BIMBRA ADAS BUMPER - MODEL W",
    price: "₹ 31990",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    name: "THAR ROXX PROMAN MARK-I ADAS METAL BUMPER",
    price: "₹ 42390",
    image: "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=600",
    gallery: [
      "https://images.unsplash.com/photo-1597404294360-feeefa04fc34?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?auto=format&fit=crop&q=80&w=600"
    ]
  }
];

const VehicleDetail = () => {
  const { vehicleId } = useParams();
  const [activeView, setActiveView] = useState('categories'); // 'categories', 'exteriors', 'front-bumper', 'product-detail'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const vehicleName = nameMappings[vehicleId] || "Mahindra Thar Roxx";

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryClick = (catName) => {
    if (catName === "EXTERIORS" && vehicleId === "mahindra-thar-roxx") {
      setActiveView('exteriors');
    }
  };

  const handleSubcategoryClick = (subName) => {
    if (subName === "FRONT BUMPER" && vehicleId === "mahindra-thar-roxx") {
      setActiveView('front-bumper');
    }
  };

  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setActiveImageIdx(0);
    setActiveView('product-detail');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const renderBackNavigation = () => {
    if (activeView === 'product-detail') {
      return (
        <button 
          onClick={() => setActiveView('front-bumper')}
          className="inline-flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors font-sans"
        >
          <ChevronLeft size={14} /> Back to Front Bumpers
        </button>
      );
    }
    if (activeView === 'front-bumper') {
      return (
        <button 
          onClick={() => setActiveView('exteriors')}
          className="inline-flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors font-sans"
        >
          <ChevronLeft size={14} /> Back to Exteriors
        </button>
      );
    }
    if (activeView === 'exteriors') {
      return (
        <button 
          onClick={() => setActiveView('categories')}
          className="inline-flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors font-sans"
        >
          <ChevronLeft size={14} /> Back to Categories
        </button>
      );
    }
    return null;
  };

  return (
    <div className="bg-[#0b0b0c] text-white font-sans min-h-screen">
      {/* Dynamic Back link / Breadcrumbs */}
      <div className="bg-zinc-950 px-4 py-3 md:px-8 border-b border-zinc-900 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-widest transition-colors font-sans">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        {renderBackNavigation()}
      </div>

      {/* PRODUCTS Header Bar */}
      <section className="bg-[#111112] py-8 text-center border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <h1 className="text-2xl md:text-3xl font-black tracking-widest text-white uppercase relative z-10 font-sans">
          PRODUCTS
        </h1>
      </section>

      {/* Main Container */}
      <section className="bg-white py-16 text-zinc-900 px-4 md:px-8 flex flex-col items-center">
        
        {activeView === 'categories' && (
          <>
            {/* Subheader */}
            <h2 className="text-base md:text-lg font-bold text-center text-zinc-800 mb-10 tracking-wide font-sans">
              Category for {vehicleName}
            </h2>

            {/* Categories Cards */}
            <div className="w-full max-w-5xl space-y-6">
              {/* Top Row: 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.slice(0, 3).map((cat, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleCategoryClick(cat.name)}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-zinc-200/80 shadow-md hover:shadow-xl transition-shadow cursor-pointer select-none"
                  >
                    {/* Grayscale Background Image */}
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-500"
                    />
                    
                    {/* Centered Bold Text */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <span className="text-white font-extrabold text-xl md:text-2xl tracking-wider text-center uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
                        {cat.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Row: 2 Columns Centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {categories.slice(3, 5).map((cat, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleCategoryClick(cat.name)}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-zinc-200/80 shadow-md hover:shadow-xl transition-shadow cursor-pointer select-none"
                  >
                    {/* Grayscale Background Image */}
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-500"
                    />
                    
                    {/* Centered Bold Text */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <span className="text-white font-extrabold text-xl md:text-2xl tracking-wider text-center uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
                        {cat.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeView === 'exteriors' && (
          <>
            {/* Subheader */}
            <h2 className="text-base md:text-lg font-bold text-center text-zinc-800 mb-10 tracking-wide font-sans">
              Exteriors for {vehicleName}
            </h2>

            {/* Exteriors Subcategories 6 Cards Grid (3 Columns, 2 Rows) */}
            <div className="w-full max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exteriorSubcategories.map((sub, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleSubcategoryClick(sub.name)}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-zinc-200/80 shadow-md hover:shadow-xl transition-shadow cursor-pointer select-none"
                  >
                    {/* Grayscale Background Image */}
                    <img 
                      src={sub.image} 
                      alt={sub.name} 
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-500"
                    />
                    
                    {/* Centered Bold Text */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <span className="text-white font-extrabold text-xl md:text-2xl tracking-wider text-center uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
                        {sub.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeView === 'front-bumper' && (
          <>
            {/* Subheader */}
            <h2 className="text-base md:text-lg font-bold text-center text-zinc-800 mb-10 tracking-wide font-sans">
              Front Bumper for {vehicleName}
            </h2>

            {/* Front Bumpers Products Grid (4 Columns) */}
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {frontBumpers.map((prod, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-zinc-200 shadow-sm rounded-lg overflow-hidden flex flex-col justify-between"
                  >
                    <div className="relative aspect-video sm:aspect-square overflow-hidden bg-zinc-100">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                      <h3 className="text-xs font-bold tracking-tight text-zinc-800 uppercase line-clamp-2 min-h-[32px] font-sans">
                        {prod.name}
                      </h3>
                      <div className="flex items-end justify-between pt-2 border-t border-zinc-100">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Price</span>
                          <span className="text-sm font-extrabold text-orange-500 font-sans">{prod.price}</span>
                        </div>
                        <button 
                          onClick={() => handleViewMore(prod)}
                          className="border border-zinc-300 hover:border-orange-500 hover:text-orange-500 text-zinc-600 font-bold text-[10px] tracking-wider px-3 py-1.5 rounded transition-colors uppercase font-sans"
                        >
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeView === 'product-detail' && selectedProduct && (
          <>
            {/* Subheader */}
            <h2 className="text-base md:text-lg font-bold text-center text-zinc-850 mb-10 tracking-wide font-sans w-full max-w-6xl border-b border-zinc-100 pb-4">
              Front Bumper for {vehicleName}
            </h2>

            {/* Split layout exactly matching the user's reference image */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 text-zinc-800">
              
              {/* Left Side: Images & Gallery Carousel */}
              <div className="lg:col-span-6 space-y-4 flex flex-col items-center">
                
                {/* Main Large Display Image */}
                <div className="w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border border-zinc-200 shadow-sm relative">
                  <img 
                    src={selectedProduct.gallery[activeImageIdx]} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnails list with navigation overlay */}
                <div className="flex items-center gap-2 max-w-md w-full justify-center mt-2">
                  <button 
                    onClick={() => setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : selectedProduct.gallery.length - 1))}
                    className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-800 hover:bg-zinc-50 transition-colors"
                  >
                    &lt;
                  </button>

                  <div className="flex gap-2 overflow-x-auto py-1">
                    {selectedProduct.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`w-14 h-14 rounded-md overflow-hidden border-2 shrink-0 ${activeImageIdx === idx ? 'border-orange-500 scale-95' : 'border-zinc-200'}`}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => setActiveImageIdx((prev) => (prev < selectedProduct.gallery.length - 1 ? prev + 1 : 0))}
                    className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-800 hover:bg-zinc-50 transition-colors"
                  >
                    &gt;
                  </button>
                </div>
              </div>

              {/* Right Side: Specifications and Enquiry Forms */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Price Display Block */}
                <div className="bg-white border border-zinc-200/80 p-6 rounded-lg shadow-sm space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest">Price</span>
                    <span className="text-2xl font-black text-zinc-900 font-sans mt-1">{selectedProduct.price} <span className="text-sm font-normal text-zinc-400">/ Pc</span></span>
                  </div>
                  <p className="text-[10px] text-zinc-400 font-medium italic">
                    *Transportation & installation charges extra
                  </p>
                  
                  {/* WhatsApp button */}
                  <a 
                    href={`https://wa.me/919810003704?text=Hi, I am interested in the ${selectedProduct.name} for my ${vehicleName}. Please share pricing and availability.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#25d366] hover:bg-[#20ba5a] text-white font-extrabold text-xs tracking-widest py-3.5 rounded flex items-center justify-center gap-2 uppercase transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.885-6.948C16.572 2.016 14.11 1.01 11.487 1.01c-5.41 0-9.811 4.372-9.815 9.8.001 1.902.506 3.757 1.464 5.37L2.1 21.9z" />
                    </svg>
                    Enquire now on WhatsApp
                  </a>
                </div>

                {/* PRODUCT SPECIFICATIONS */}
                <div className="bg-white border border-zinc-200/80 p-6 rounded-lg shadow-sm space-y-4">
                  <h3 className="text-xs font-black tracking-widest text-zinc-800 uppercase border-b border-zinc-100 pb-2">
                    PRODUCT SPECIFICATIONS
                  </h3>
                  <div className="space-y-2 text-xs md:text-sm">
                    <div className="flex justify-between border-b border-zinc-50 pb-2">
                      <span className="text-zinc-400 font-bold">Vehicle Model</span>
                      <span className="text-zinc-800 font-black">{vehicleName}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-50 pb-2">
                      <span className="text-zinc-400 font-bold">Vehicle Parts Category</span>
                      <span className="text-zinc-800 font-black">Exteriors</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-zinc-400 font-bold">Vehicle Parts SubCategory</span>
                      <span className="text-zinc-800 font-black">Front Bumper</span>
                    </div>
                  </div>
                </div>

                {/* Support Hotline Callout */}
                <a 
                  href="tel:+919810003704" 
                  className="bg-[#0b0b0c] hover:bg-zinc-900 text-white p-4 rounded-lg flex items-center gap-4 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-wide">+91 9810003704</h4>
                    <p className="text-[10px] text-zinc-400 font-medium mt-0.5">Call our experts to get help</p>
                  </div>
                </a>

                {/* CONTACT US FORM */}
                <div className="bg-white border border-zinc-200/80 p-6 rounded-lg shadow-sm space-y-4">
                  <h3 className="text-xs font-black tracking-widest text-zinc-800 uppercase border-b border-zinc-100 pb-2">
                    CONTACT US
                  </h3>

                  {submitted ? (
                    <div className="bg-green-50 text-green-700 p-4 rounded-lg text-xs md:text-sm font-medium text-center">
                      Message sent successfully! Our experts will call you back shortly.
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs md:text-sm border border-zinc-200 p-3 rounded focus:outline-none focus:border-orange-500 text-zinc-800 bg-white"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs md:text-sm border border-zinc-200 p-3 rounded focus:outline-none focus:border-orange-500 text-zinc-800 bg-white"
                      />
                      <input 
                        type="tel" 
                        placeholder="Your Phone" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs md:text-sm border border-zinc-200 p-3 rounded focus:outline-none focus:border-orange-500 text-zinc-800 bg-white"
                      />
                      <textarea 
                        placeholder="Your Message" 
                        rows="3" 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-xs md:text-sm border border-zinc-200 p-3 rounded focus:outline-none focus:border-orange-500 text-zinc-800 bg-white"
                      ></textarea>
                      <button 
                        type="submit" 
                        className="w-full bg-[#f28e2b] hover:bg-[#e07f20] text-white font-extrabold text-xs tracking-widest py-3 rounded uppercase transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Send size={12} />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>
          </>
        )}

      </section>
    </div>
  );
};

export default VehicleDetail;
