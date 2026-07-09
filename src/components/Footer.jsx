import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

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

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <span className="text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              DRANGO
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Drango is one of India's leading premium auto care and detailing centers. We specialize in high-end Paint Protection Film (PPF), Ceramic Coatings, custom paint jobs, and restoration.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://youtube.com/@Drango" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
              <Youtube size={16} />
            </a>
            <a href="https://instagram.com/drango" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com/drango" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 border-l-2 border-red-600 pl-3">
            SERVICES
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/services/ppf" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <ArrowRight size={12} className="text-red-500" /> Paint Protection Film (PPF)
              </Link>
            </li>
            <li>
              <Link to="/services/ceramic-coating" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <ArrowRight size={12} className="text-red-500" /> Ceramic Coating
              </Link>
            </li>
            <li>
              <Link to="/services/peelable-paint" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <ArrowRight size={12} className="text-red-500" /> Peelable Paint
              </Link>
            </li>
            <li>
              <Link to="/services/premium-paint" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <ArrowRight size={12} className="text-red-500" /> Premium Paint Job
              </Link>
            </li>
            <li>
              <Link to="/services/interior-detailing" className="hover:text-red-500 transition-colors flex items-center gap-1">
                <ArrowRight size={12} className="text-red-500" /> Interior Detailing
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 border-l-2 border-red-600 pl-3">
            QUICK LINKS
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/franchise" className="hover:text-red-500 transition-colors">Franchise Opportunities</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-red-500 transition-colors">Barricade Products</Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-red-500 transition-colors">Store Locator</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-red-500 transition-colors">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-6 border-l-2 border-red-600 pl-3">
            CONTACT INFO
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-red-500 shrink-0 mt-0.5" />
              <span>
                <strong>Pune HQ:</strong> Sr. No 78/1, Near Yewalewadi Road, Kondhwa Budruk, Pune, Maharashtra 411048
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-red-500" />
              <div>
                <p>Enquiry: <a href="tel:+918888099900" className="text-white hover:text-red-500">+91 88880 99900</a></p>
                <p>Franchise: <a href="tel:+919860684000" className="text-white hover:text-red-500">+91 98606 84000</a></p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-red-500" />
              <a href="mailto:info@drango.in" className="text-white hover:text-red-500">info@drango.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Drango. All rights reserved.</p>
        <p className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>&middot;</span>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
