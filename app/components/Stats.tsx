import { Sofa, Globe, Truck, Building2 } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-24 bg-[#0F1115] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-[#C8A96B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

          <div className="bg-[#16191E]/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96B]/30 hover:bg-[#16191E]/80 group">
            <div className="w-12 h-12 rounded-full bg-[#C8A96B]/10 flex items-center justify-center mx-auto mb-5 text-[#C8A96B] group-hover:scale-110 transition-transform duration-300">
              <Sofa className="w-5 h-5" />
            </div>
            <h2 className="text-4xl md:text-5xl text-[#C8A96B] font-semibold tracking-tight mb-2">
              10,000+
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-medium tracking-wide uppercase">
              Orders Completed
            </p>
          </div>

          <div className="bg-[#16191E]/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96B]/30 hover:bg-[#16191E]/80 group">
            <div className="w-12 h-12 rounded-full bg-[#C8A96B]/10 flex items-center justify-center mx-auto mb-5 text-[#C8A96B] group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-4xl md:text-5xl text-[#C8A96B] font-semibold tracking-tight mb-2">
              Kirti Nagar
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-medium tracking-wide uppercase">
              Manufacturing Base
            </p>
          </div>

          <div className="bg-[#16191E]/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96B]/30 hover:bg-[#16191E]/80 group">
            <div className="w-12 h-12 rounded-full bg-[#C8A96B]/10 flex items-center justify-center mx-auto mb-5 text-[#C8A96B] group-hover:scale-110 transition-transform duration-300">
              <Truck className="w-5 h-5" />
            </div>
            <h2 className="text-4xl md:text-5xl text-[#C8A96B] font-semibold tracking-tight mb-2">
              PAN India
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-medium tracking-wide uppercase">
              Safe Nationwide Delivery
            </p>
          </div>

          <div className="bg-[#16191E]/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96B]/30 hover:bg-[#16191E]/80 group">
            <div className="w-12 h-12 rounded-full bg-[#C8A96B]/10 flex items-center justify-center mx-auto mb-5 text-[#C8A96B] group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-4xl md:text-5xl text-[#C8A96B] font-semibold tracking-tight mb-2">
              Wholesale
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-medium tracking-wide uppercase">
              & Retail Economics
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}