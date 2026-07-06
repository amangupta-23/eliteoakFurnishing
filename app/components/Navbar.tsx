"use client";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F1115]/80 backdrop-blur-md border-b border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div>
          <a href="#" className="block">
            <h1 className="text-xl font-bold tracking-widest text-white uppercase">
              ELITEOAK <span className="text-[#C8A96B]">FURNISHING</span>
            </h1>
            <p className="text-[8px] text-zinc-500 tracking-[0.2em] uppercase mt-0.5 font-medium">
              A Unit of Good Fly Enterprises
            </p>
          </a>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-light tracking-wide">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#collections-section" className="text-zinc-400 hover:text-white transition-colors">
              Collections
            </a>
            <a href="#contact-section" className="text-zinc-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* <a 
            href="#contact-section"
            className="px-5 py-2.5 bg-[#C8A96B]/10 hover:bg-[#C8A96B] border border-[#C8A96B]/30 hover:border-[#C8A96B] text-[#C8A96B] hover:text-black text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            Book Order
          </a> */}
        </div>

      </div>
    </nav>
  );
}