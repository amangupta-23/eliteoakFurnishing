export default function BestSellers() {
  const whatsappNumber = "8527304796"; 

  const products = [
    {
      id: 1,
      name: "The Royal Tufted Bed",
      category: "Beds",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop",
      desc: "Premium velvet upholstery with a high back grand headboard design."
    },
    {
      id: 2,
      name: "Chesterfield Velvet Sofa",
      category: "Sofas",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=600&auto=format&fit=crop",
      desc: "Classic deep button tufted luxury seater crafted in deep emerald hues."
    },
    {
      id: 3,
      name: "Monarch 6-Seater Dining",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=600&auto=format&fit=crop",
      desc: "Solid Italian marble top paired with pure walnut wood finished chairs."
    }
  ];

  const getWhatsappUrl = (productName: string) => {
    const message = encodeURIComponent(`Hi EliteOak Furnishing, I am highly interested in "${productName}". Please share the pricing, custom size options, and delivery timeline for this piece.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="py-24 bg-[#0F1115] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Signature Masterpieces
          </h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto font-light">
            Our most loved, curated premium designs tailored perfectly for elite lifestyle living spaces.
          </p>
          <div className="w-12 h-1 bg-[#C8A96B] mx-auto rounded-full mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-[#16191E]/20 border border-zinc-800/40 rounded-3xl overflow-hidden flex flex-col group hover:border-[#C8A96B]/20 transition-all duration-300"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-900">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-zinc-800 text-[#C8A96B] text-[11px] font-medium px-3 py-1 rounded-full tracking-wider uppercase">
                  {product.category}
                </span>
              </div>

              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide mb-2">
                    {product.name}
                  </h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                    {product.desc}
                  </p>
                </div>

                <a 
                  href={getWhatsappUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-zinc-900 hover:bg-[#C8A96B] border border-zinc-800 hover:border-[#C8A96B] text-zinc-300 hover:text-black font-medium rounded-2xl text-center text-sm transition-all duration-300 tracking-wide block"
                >
                  Inquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}