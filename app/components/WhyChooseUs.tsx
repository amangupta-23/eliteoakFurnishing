import { ShieldCheck, Trees, BadgePercent, Layers } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Trees className="w-6 h-6" />,
      title: "Choice of Premium Woods",
      desc: "Get your furniture customized exactly how you want in genuine Solid Sagwan, Marandi, Teak wood, or Premium Plywood."
    },
    {
      icon: <BadgePercent className="w-6 h-6" />,
      title: "Direct Factory Pricing",
      desc: "As authentic manufacturers, we eliminate all middleman commissions, offering elite build quality at genuine wholesale rates."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Flexible Material Budgets",
      desc: "Pricing adapts to your choice. Choose standard reliable construction or transition to ultra high-end luxury specifications."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Zero Complaint History",
      desc: "Backed by the experience of fulfilling 10,000+ orders across India, our production lines guarantee absolute perfection."
    }
  ];

  return (
    <section className="py-24 bg-[#0F1115] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why EliteOak Hub
          </h2>
          <div className="w-12 h-1 bg-[#C8A96B] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#16191E]/30 border border-zinc-800/40 rounded-3xl p-8 transition-all duration-300 hover:border-[#C8A96B]/20 hover:bg-[#16191E]/60 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#C8A96B]/10 flex items-center justify-center text-[#C8A96B] mb-6 group-hover:bg-[#C8A96B] group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}