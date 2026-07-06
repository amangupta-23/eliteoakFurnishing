export default function Hero() {
  const whatsappNumber = "8527304796"; 
  const customDesignMessage = encodeURIComponent("Hi EliteOak Furnishing, I have a custom furniture design image. I want to share it with you to get a manufacturing price quote.");
  const whatsappCustomUrl = `https://wa.me/${whatsappNumber}?text=${customDesignMessage}`;

  return (
    <section className="relative min-h-screen bg-[#0F1115] flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-500px h-500px bg-[#C8A96B]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-400px h-400px bg-[#C8A96B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8A96B]/10 border border-[#C8A96B]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-[#C8A96B] uppercase">
              Kirti Nagar's Premier Manufacturer & Wholesaler
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Direct Factory <br />
            <span className="text-[#C8A96B]">Luxury Furniture</span> <br />
            All Over India
          </h1>

          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Bespoke premium furniture handcrafted in Sagwan, Marandi & Teak wood. Get wholesale factory pricing for homes, showrooms, and complete luxury interior projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="#collections-section"
              className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-[#C8A96B] hover:text-white transition-all duration-300 text-center shadow-lg shadow-white/5"
            >
              Explore Collection
            </a>
            <a 
              href={whatsappCustomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#C8A96B] text-[#C8A96B] font-medium rounded-full hover:bg-[#C8A96B] hover:text-black transition-all duration-300 text-center framework-btn"
            >
              Send Custom Design
            </a>
          </div>
        </div>

        <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl group">
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" 
            alt="EliteOak Kirti Nagar Manufacturing Hub"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
}