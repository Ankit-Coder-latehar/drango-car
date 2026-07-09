import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = ({ title = "GET A CUSTOM QUOTE", subtitle = "Send us your vehicle details, and our car care experts will get back to you with the best packages." }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    branch: 'Pune HQ',
    service: 'Paint Protection Film (PPF)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-6 md:p-10 rounded-xl glow-red">
      {submitted ? (
        <div className="text-center py-12 flex flex-col items-center justify-center">
          <CheckCircle size={64} className="text-green-500 mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold text-white mb-2">Enquiry Submitted Successfully!</h3>
          <p className="text-zinc-400 max-w-md mx-auto mb-6">
            Thank you for reaching out to Drango. One of our detailing experts will contact you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-widest px-6 py-3 rounded transition-colors"
          >
            SUBMIT ANOTHER ENQUIRY
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black tracking-wider text-white uppercase">{title}</h3>
            <p className="text-sm text-zinc-400 mt-2">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Full Name *</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Phone Number *</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Car/Bike Model *</label>
              <input 
                type="text" 
                name="carModel"
                required
                value={formData.carModel}
                onChange={handleChange}
                placeholder="e.g. Mahindra XUV700, BMW M3"
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Select Nearest Branch *</label>
              <select 
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
              >
                <option value="Pune HQ">Pune (Kondhwa)</option>
                <option value="Mumbai">Mumbai (Andheri)</option>
                <option value="Bengaluru">Bengaluru (Whitefield)</option>
                <option value="Delhi NCR">Delhi NCR (Gurugram)</option>
                <option value="Hyderabad">Hyderabad (Gachibowli)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Required Service *</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
              >
                <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Peelable Paint (Rubbershield)">Peelable Paint (Rubbershield)</option>
                <option value="Premium Paint Job">Premium Paint Job</option>
                <option value="Interior Detailing">Interior Detailing</option>
                <option value="Denting & Painting">Denting & Painting</option>
                <option value="Custom Modification">Custom Modification</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Message / Requirements</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about the condition of your vehicle or ask specific questions..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest text-xs py-4 rounded transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <>
                <span>SEND ENQUIRY</span>
                <Send size={14} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
