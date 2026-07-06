// app/data/inventory.ts

export interface FurnitureItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const masterInventory: Record<string, FurnitureItem[]> = {
  beds: [
    {
      id: "bed-1",
      name: "EliteOak Luxury Hydraulic Bed #001",
      price: 35000,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400" // Yahan apni photo ka real link lagayein
    },
    {
      id: "bed-2",
      name: "EliteOak Teak Wood Bed #002",
      price: 42000,
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400"
    }
    // Iske niche aap bed-3, bed-4 karke line-by-line jitne marzi items add karte jao
  ],
  
  sofas: [
    {
      id: "sofa-1",
      name: "EliteOak Chesterfield Velvet Sofa #001",
      price: 45000,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"
    }
  ],

  dining: [
    {
      id: "dining-1",
      name: "EliteOak Monarch 6-Seater Dining #001",
      price: 55000,
      image: "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?w=400"
    }
  ],

  wardrobes: [
    {
      id: "wardrobe-1",
      name: "Bespoke Sliding Modular Wardrobe #001",
      price: 60000,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400"
    }
  ]
};