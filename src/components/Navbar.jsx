import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, MapPin } from 'lucide-react';

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const navigate = useNavigate();

  const services = [
    { name: 'Paint Protection Film (PPF)', path: '/services/ppf' },
    { name: 'Ceramic Coating', path: '/services/ceramic-coating' },
    { name: 'Peelable Paint (Rubbershield)', path: '/services/peelable-paint' },
    { name: 'Premium Paint Job', path: '/services/premium-paint' },
    { name: 'Interior Detailing', path: '/services/interior-detailing' },
    { name: 'Denting & Painting', path: '/services/denting-painting' },
    { name: 'Custom Modification', path: '/services/custom-modification' },
  ];

  return (
    <header className="w-full text-white font-sans">
      {/* Top info bar */}
      <div className="bg-black/80 border-b border-zinc-800 text-xs px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <a href="tel:+918888099900" className="flex items-center gap-1 hover:text-red-500 transition-colors">
            <Phone size={12} className="text-red-500" />
            <span>+91 88880 99900</span>
          </a>
          <a href="mailto:info@drango.in" className="flex items-center gap-1 hover:text-red-500 transition-colors">
            <Mail size={12} className="text-red-500" />
            <span>info@drango.in</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-zinc-400">
            <MapPin size={12} className="text-red-500" />
            <span>Chandigarh , Haryana, India</span>
          </span>
          <div className="flex items-center gap-3">
            <a href="https://youtube.com/@Drango" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Youtube size={14} />
            </a>
            <a href="https://instagram.com/drango" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Instagram size={14} />
            </a>
            <a href="https://facebook.com/drango" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Facebook size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="navbar-concrete-bg sticky top-0 z-50 border-b border-zinc-900 px-4 py-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="text-2xl md:text-3xl font-black tracking-wider uppercase bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-orange-400 transition-all duration-300">
              DRANGO
            </span>
            <span className="absolute -bottom-1 right-0 text-[8px] tracking-[0.2em] font-semibold text-zinc-400">
              PREMIUM AUTO CARE
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="hover:text-red-500 transition-colors font-medium text-sm">HOME</Link>
          <Link to="/about" className="hover:text-red-500 transition-colors font-medium text-sm">ABOUT US</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button className="hover:text-red-500 transition-colors font-medium text-sm flex items-center gap-1 uppercase">
              SERVICES <ChevronDown size={14} />
            </button>
            {servicesDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded shadow-xl py-2 z-50">
                {services.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-red-600 hover:text-white transition-colors text-zinc-300 text-xs font-medium"
                    onClick={() => setServicesDropdown(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/franchise" className="hover:text-red-500 transition-colors font-medium text-sm">FRANCHISE</Link>
          <Link to="/products" className="hover:text-red-500 transition-colors font-medium text-sm">BARRICADE PRODUCTS</Link>
          <Link to="/store" className="hover:text-red-500 transition-colors font-medium text-sm">STORES</Link>
          <Link to="/faq" className="hover:text-red-500 transition-colors font-medium text-sm">FAQ</Link>
          <Link to="/contact" className="hover:text-red-500 transition-colors font-medium text-sm">CONTACT US</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
          >
            SERVICE ENQUIRY
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white hover:text-red-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-zinc-950/95 flex flex-col pt-24 px-6 gap-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl font-bold hover:text-red-500">HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-xl font-bold hover:text-red-500">ABOUT US</Link>

          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold text-zinc-500">SERVICES</span>
            <div className="pl-4 flex flex-col gap-2 border-l border-zinc-800">
              {services.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold hover:text-red-500 text-zinc-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/franchise" onClick={() => setIsOpen(false)} className="text-xl font-bold hover:text-red-500">FRANCHISE</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="text-xl font-bold hover:text-red-500">BARRICADE PRODUCTS</Link>
          <Link to="/store" onClick={() => setIsOpen(false)} className="text-xl font-bold hover:text-red-500">STORES</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="text-xl font-bold hover:text-red-500">FAQ</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xl font-bold hover:text-red-500">CONTACT US</Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-center py-3 rounded mt-4"
          >
            SERVICE ENQUIRY
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
