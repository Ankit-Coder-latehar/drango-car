import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="bg-[#0b0b0c] text-white font-sans">
      {/* Header */}
      <section className="relative py-20 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">CONTACT US</h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Get in touch with our team for service appointments, customer support, or business queries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-wide">CONNECT WITH OUR DETAILED STUDIO</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              If you have any doubts about Paint Protection Films, Ceramic Coating, custom paint work, or want an estimate, reach out to us.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">Pune HQ Studio Address</h4>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  Sr. No 78/1, Near Yewalewadi Road, Kondhwa Budruk, Pune, Maharashtra 411048
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">Call Channels</h4>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  Enquiry: <a href="tel:+918888099900" className="hover:text-red-500 transition-colors">+91 88880 99900</a>
                </p>
                <p className="text-zinc-400 text-xs md:text-sm">
                  Franchise: <a href="tel:+919860684000" className="hover:text-red-500 transition-colors">+91 98606 84000</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">Email Address</h4>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  <a href="mailto:info@drango.in" className="hover:text-red-500 transition-colors">info@drango.in</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase text-white">Studio Timings</h4>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  Monday to Saturday: 9:30 AM to 6:30 PM <br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
