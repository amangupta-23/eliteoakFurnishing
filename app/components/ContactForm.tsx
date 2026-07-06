"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "8527304796"; 
    
    const message = encodeURIComponent(
      `Hi EliteOak Furnishing,\n\n` +
      `I want to discuss an Order / Interior Project:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Requirement: ${formData.notes}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact-section" className="py-24 bg-[#0F1115] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Book Order For Your Interior
          </h2>
          <p className="text-zinc-400 text-sm max-w-sm mx-auto font-light">
            Share your requirements below to book bulk wholesale orders or complete home interior execution.
          </p>
          <div className="w-12 h-1 bg-[#C8A96B] mx-auto rounded-full mt-4" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#16191E]/20 border border-zinc-800/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div>
            <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Your Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#C8A96B] transition-colors"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Phone Number</label>
            <input 
              type="tel" 
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#C8A96B] transition-colors"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Order / Interior Requirements</label>
            <textarea 
              rows={4}
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-[#C8A96B] transition-colors resize-none"
              placeholder="Example: Need 5 beds for wholesale / Complete 3BHK flat interior woodwork setup..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-white hover:bg-[#C8A96B] text-black hover:text-white font-semibold rounded-xl text-center transition-all duration-300 tracking-wide shadow-lg shadow-white/5"
          >
            Submit Order Inquiry via WhatsApp
          </button>
        </form>

      </div>
    </section>
  );
}