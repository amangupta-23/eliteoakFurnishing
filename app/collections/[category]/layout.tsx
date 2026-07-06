// app/collections/[category]/layout.tsx
import React from "react";

// 1. Google SEO ke liye dynamic metadata function (Ab yeh pure Server par chalega)
export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category;
  
  // Format category name (e.g., "beds" -> "Beds")
  const formattedCategory = category 
    ? category.charAt(0).toUpperCase() + category.slice(1) 
    : "Furniture";

  return {
    title: `Wholesale ${formattedCategory} Manufacturer in Kirti Nagar | EliteOak`,
    description: `Get factory-direct wholesale pricing on luxury ${category || 'furniture'} for showrooms, dealers, and hotels. Premium manufacturing from Delhi's top furniture hub.`,
  };
}

// 2. Layout Wrapper Component
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}