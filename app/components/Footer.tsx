export default function Footer() {
  return (
    <footer className="bg-[#0A0B0D] border-t border-zinc-900/60 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        <div className="text-center lg:text-left space-y-2">
          <div>
            <h2 className="text-xl font-medium tracking-widest text-white uppercase">
              ELITEOAK <span className="text-[#C8A96B] font-semibold">FURNISHING</span>
            </h2>
            <p className="text-[9px] text-zinc-600 tracking-[0.2em] uppercase mt-0.5">
              A Unit of Good Fly Enterprises
            </p>
          </div>
          <p className="text-zinc-500 text-xs font-light">
            Industrial Area, Kirti Nagar Hub, New Delhi
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-medium py-2 border-y border-zinc-900/40 lg:border-none">
          <span>Manufacturer</span>
          <span className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span>Wholesaler</span>
          <span className="w-1 h-1 bg-zinc-800 rounded-full" />
          <span>PAN India Delivery</span>
        </div>

        <div className="text-center lg:text-right space-y-1.5">
          <div className="text-xs font-light text-zinc-400">
            Order Desk: <a href="tel:+91XXXXXXXXXX" className="text-[#C8A96B] font-medium tracking-wide hover:underline">+91 8527304796</a>
          </div>
          <p className="text-zinc-600 text-[11px] font-light tracking-wide">
            © {new Date().getFullYear()} EliteOak Furnishing. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}