"use client";
import React from "react";
import Link from "next/link"; // 1. Link ko yahan import kiya

export default function Collections() {
  const categories = [
    { 
      title: "Luxury Beds", 
      slug: "beds", // 2. URL ke liye slug add kiya
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop", 
      items: "120+ Designs" 
    },
    { 
      title: "Premium Sofas", 
      slug: "sofas", // URL path
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop", 
      items: "85+ Designs" 
    },
    { 
      title: "Elegant Dining", 
      slug: "dining", // URL path
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=600&auto=format&fit=crop", 
      items: "40+ Designs" 
    },
    { 
      title: "Designer Wardrobes", 
      slug: "wardrobes", // URL path
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop", 
      items: "60+ Designs" 
    }
  ];

  return (
    <section id="collections-section" className="py-24 bg-[#0F1115] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Collections
          </h2>
          <div className="w-12 h-1 bg-[#C8A96B] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            /* 3. div ko hata kar Link tag lagaya aur sahi path diya */
            <Link 
              href={`/collections/${item.slug}`}
              key={item.title}
              className="group relative overflow-hidden rounded-3xl aspect-3/4 bg-zinc-900 border border-zinc-800/50 hover:border-[#C8A96B]/40 transition-all duration-500 block cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10 transition-all duration-500 group-hover:from-black/95" />
              
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform transition-transform duration-500">
                <p className="text-[#C8A96B] text-xs font-semibold uppercase tracking-wider mb-1">
                  {item.items}
                </p>
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#C8A96B] transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}