import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const storeLocations = [
  {
    city: "Pune (HQ)",
    address: "Sr. No 78/1, Near Yewalewadi Road, Kondhwa Budruk, Pune, Maharashtra 411048",
    phone: "+91 88880 99900",
    email: "pune@drango.in",
    mapUrl: "https://maps.google.com"
  },
  {
    city: "Mumbai",
    address: "Unit 3, Sakinaka Industrial Estate, Sakinaka, Andheri East, Mumbai, Maharashtra 400072",
    phone: "+91 88882 11100",
    email: "mumbai@drango.in",
    mapUrl: "https://maps.google.com"
  },
  {
    city: "Bengaluru",
    address: "45, Whitefield Main Rd, Doddanakundi Industrial Area, Hoodi, Bengaluru, Karnataka 560048",
    phone: "+91 88883 22200",
    email: "blr@drango.in",
    mapUrl: "https://maps.google.com"
  },
  {
    city: "Hyderabad",
    address: "Survey No. 12, Gachibowli Miyapur Road, Kothaguda, Hyderabad, Telangana 500084",
    phone: "+91 88884 33300",
    email: "hyd@drango.in",
    mapUrl: "https://maps.google.com"
  },
  {
    city: "Delhi NCR",
    address: "Plot No. 89, Sector 34, Near Marble Market, Gurugram, Haryana 122001",
    phone: "+91 88885 44400",
    email: "delhi@drango.in",
    mapUrl: "https://maps.google.com"
  },
  {
    city: "Chennai",
    address: "No. 12, Mount Poonamallee Road, Guindy, Chennai, Tamil Nadu 600032",
    phone: "+91 88886 55500",
    email: "chennai@drango.in",
    mapUrl: "https://maps.google.com"
  }
];

const Stores = () => {
  return (
    <div className="bg-[#0b0b0c] text-white font-sans">
      {/* Header */}
      <section className="relative py-20 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">OUR STORES</h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Find a Drango studio near you. Reach out to book your car detailed by certified experts.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeLocations.map((store, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 space-y-6 flex flex-col justify-between hover:border-red-600 transition-colors">
              <div className="space-y-4">
                <span className="bg-red-600/10 text-red-500 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-red-500/20">
                  {store.city}
                </span>
                <h3 className="text-2xl font-black uppercase text-white mt-2">Drango {store.city.split(" ")[0]}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed min-h-[72px]">
                  {store.address}
                </p>
                <div className="space-y-2 border-t border-zinc-800 pt-4 text-sm text-zinc-300">
                  <a href={`tel:${store.phone.replace(/ /g, '')}`} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <Phone size={14} className="text-red-500" />
                    <span>{store.phone}</span>
                  </a>
                  <a href={`mailto:${store.email}`} className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <Mail size={14} className="text-red-500" />
                    <span>{store.email}</span>
                  </a>
                </div>
              </div>

              <a 
                href={store.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-zinc-950 hover:bg-red-600 border border-zinc-800 hover:border-red-600 text-white font-bold text-xs tracking-widest py-3 rounded transition-all flex items-center justify-center gap-2 uppercase"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stores;
