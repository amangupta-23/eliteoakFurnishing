"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { masterInventory } from "../../data/inventory"; //  Correct Path

export default function CategoryPage() {
  const params = useParams();
  const category = params?.category as string;
  
  // Yahan apna asli wholesale business WhatsApp 10-digit number lagayein
  const whatsappNumber = "8527304796"

  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});

  const categoriesMeta: Record<string, { title: string; desc: string }> = {
    beds: { title: "Luxury Beds & Headboards", desc: "Factory-direct solid wood frames and premium headboard variants." },
    sofas: { title: "Premium Living Room Sofas", desc: "Wholesale sectional loungers, chesterfields, and dynamic sofa sets." },
    dining: { title: "Elegant Dining Concepts", desc: "Seasoned teak wood structures and marble top tables." },
    wardrobes: { title: "Bespoke Modular Wardrobes", desc: "Sliding glass wardrobes and premium wooden almirahs." }
  };

  const currentMeta = categoriesMeta[category] || { title: "Factory Catalog", desc: "Wholesale manufacturing items." };
  
  // Inventory se is category ke saare products fetch ho rahe hain
  const currentItems = masterInventory[category] || [];

  const updateQuantity = (id: string, delta: number) => {
    setSelectedItems((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  // Upgraded WhatsApp Link Creator Logic with Image Reference
  const handleCheckout = () => {
    let totalBill = 0;
    let itemsText = "";
    let totalQuantity = 0;

    currentItems.forEach((item) => {
      const qty = selectedItems[item.id] || 0;
      if (qty > 0) {
        totalQuantity += qty;
        const cost = item.price * qty;
        totalBill += cost;
        
        // YAHAN BADLAAV HAI: Har item ke naam aur qty ke sath uski photo ka clear link bhi text me judega
        itemsText += `📦 *${item.name}*\n` +
                     `   • Quantity: ${qty}\n` +
                     `   • Price: ₹${item.price.toLocaleString()} each\n` +
                     `   • Subtotal: ₹${cost.toLocaleString()}\n` +
                     `   • Design Photo: ${item.image}\n\n`;
      }
    });

    if (totalQuantity === 0) {
      alert("Please select at least 1 design item using the (+) button before sending to WhatsApp.");
      return;
    }

    const advancePayment = totalBill * 0.25;
    const finalPayment = totalBill * 0.75;

    const message = encodeURIComponent(
      `Hello EliteOak Furnishing,\n\n` +
      `I have selected the following manufacturing inventory models from your catalog showroom:\n\n` +
      `${itemsText}` +
      `--- PRODUCTION & ORDER SUMMARY ---\n` +
      `• Total Items Selected: ${totalQuantity}\n` +
      `• Total Estimated Deal: ₹${totalBill.toLocaleString()}\n` +
      `• 25% Booking Deposit (Production Setup): ₹${advancePayment.toLocaleString()}\n` +
      `• 75% Remainder (Before Factory Loading): ₹${finalPayment.toLocaleString()}\n\n` +
      `Please check the stock timeline for these specific image references and send confirmation.`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="bg-[#0F1115] min-h-screen text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <Link 
            href="/" 
            className="text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-[#C8A96B] transition-colors duration-300 font-medium"
          >
            ← Back to Showroom
          </Link>
          
          <button
            onClick={handleCheckout}
            className="px-6 py-3.5 bg-[#C8A96B] text-black font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-all duration-300 shadow-xl shadow-[#C8A96B]/10 cursor-pointer"
          >
            Send Order Batch & Images to WhatsApp
          </button>
        </div>

        <div className="border-b border-zinc-900 pb-12 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {currentMeta.title}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-light max-w-xl">
            {currentMeta.desc} Select your designs and adjust quantities. Image verification links will automatic attach to invoice.
          </p>
        </div>

        {currentItems.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-3xl">
            <p className="text-zinc-500 text-sm">No manufacturing items added in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {currentItems.map((item) => {
              const qty = selectedItems[item.id] || 0;
              return (
                <div 
                  key={item.id} 
                  className="bg-[#16191E]/10 border border-zinc-900 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#C8A96B]/30 transition-all duration-200"
                >
                  <div className="relative aspect-square overflow-hidden bg-zinc-950 p-2 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 filter brightness-95"
                    />
                  </div>
                  
                  <div className="p-3 bg-zinc-950/40 border-t border-zinc-900 space-y-2">
                    <h3 className="text-zinc-300 font-medium text-xs tracking-wide line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[#C8A96B] font-mono text-xs">
                      ₹{item.price.toLocaleString()}
                    </p>

                    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800/60 p-1 rounded-xl">
                      <span className="text-[9px] text-zinc-500 pl-1 uppercase font-medium">Qty:</span>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-5 h-5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-[10px] transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-white font-mono font-medium text-[11px] w-3 text-center">
                          {qty}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-5 h-5 rounded-md bg-[#C8A96B]/10 hover:bg-[#C8A96B] text-[#C8A96B] hover:text-black font-medium text-[10px] transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}