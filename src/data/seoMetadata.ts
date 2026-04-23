export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  path?: string;
}

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: "Electric Scooters in Hyderabad – Best EV Scooty Deals | Axigear",
    description: "Explore electric scooters in Hyderabad with affordable pricing, long battery range, and eco-friendly performance for daily commuting.",
    keywords: "electric scooter Hyderabad, EV scooty, best electric scooter price, affordable e-scooter",
    ogTitle: "Electric Scooters in Hyderabad – Best EV Scooty Deals | Axigear",
    ogDescription: "Explore electric scooters in Hyderabad with affordable pricing, long battery range, and eco-friendly performance for daily commuting.",
    path: "/"
  },
  buyPage: {
    title: "Buy Electric Scooter in Hyderabad – Price & Models | Axigear",
    description: "Find the best electric scooters in Hyderabad with prices starting from budget to premium models with high mileage and performance.",
    keywords: "buy electric scooter Hyderabad, electric scooter price, e-scooter models, high mileage",
    ogTitle: "Buy Electric Scooter in Hyderabad – Price & Models | Axigear",
    ogDescription: "Find the best electric scooters in Hyderabad with prices starting from budget to premium models with high mileage and performance.",
    path: "/buy"
  },
  bestForDaily: {
    title: "Best Electric Scooters in Hyderabad for Daily Use | Axigear",
    description: "Discover top EV scooters perfect for Hyderabad traffic. Smooth rides, low maintenance, and efficient battery performance.",
    keywords: "electric scooter daily use, best EV scooter, Hyderabad traffic, low maintenance",
    ogTitle: "Best Electric Scooters in Hyderabad for Daily Use | Axigear",
    ogDescription: "Discover top EV scooters perfect for Hyderabad traffic. Smooth rides, low maintenance, and efficient battery performance.",
    path: "/best-daily"
  },
  affordable: {
    title: "Affordable Electric Scooty in Hyderabad – Starting ₹40K | Axigear",
    description: "Get budget electric scooters in Hyderabad starting around ₹40,000 with efficient range and cost-saving benefits.",
    keywords: "affordable electric scooter, budget e-scooter ₹40000, cheap electric scooty",
    ogTitle: "Affordable Electric Scooty in Hyderabad – Starting ₹40K | Axigear",
    ogDescription: "Get budget electric scooters in Hyderabad starting around ₹40,000 with efficient range and cost-saving benefits.",
    path: "/affordable"
  },
  priceAndRange: {
    title: "Electric Scooter Price in Hyderabad – Range & EMI | Axigear",
    description: "Check updated electric scooter prices in Hyderabad with models offering 60–100 km range and affordable EMI options.",
    keywords: "electric scooter price Hyderabad, 60 km range, 100 km range, EMI options",
    ogTitle: "Electric Scooter Price in Hyderabad – Range & EMI | Axigear",
    ogDescription: "Check updated electric scooter prices in Hyderabad with models offering 60–100 km range and affordable EMI options.",
    path: "/price-range"
  },
  longRange: {
    title: "Top EV Scooters in Hyderabad with Long Range | Axigear",
    description: "Explore electric scooters with up to 100+ km range, ideal for city rides and daily commuting in Hyderabad.",
    keywords: "electric scooter long range, 100 km e-scooter, high range EV scooty",
    ogTitle: "Top EV Scooters in Hyderabad with Long Range | Axigear",
    ogDescription: "Explore electric scooters with up to 100+ km range, ideal for city rides and daily commuting in Hyderabad.",
    path: "/long-range"
  },
  traffic: {
    title: "Best Electric Scooters for Hyderabad Traffic | Axigear",
    description: "Navigate Hyderabad traffic easily with lightweight, efficient, and eco-friendly electric scooters.",
    keywords: "electric scooter Hyderabad traffic, lightweight e-scooter, city commute",
    ogTitle: "Best Electric Scooters for Hyderabad Traffic | Axigear",
    ogDescription: "Navigate Hyderabad traffic easily with lightweight, efficient, and eco-friendly electric scooters.",
    path: "/traffic"
  },
  lowCost: {
    title: "Low Cost Electric Scooters in Hyderabad | Axigear",
    description: "Save money with electric scooters that cost just ₹15–₹25 per charge, making daily commuting affordable.",
    keywords: "low cost electric scooter, cheap charging cost, affordable daily commute",
    ogTitle: "Low Cost Electric Scooters in Hyderabad | Axigear",
    ogDescription: "Save money with electric scooters that cost just ₹15–₹25 per charge, making daily commuting affordable.",
    path: "/low-cost"
  },
  ecoFriendly: {
    title: "Electric Scooters in Hyderabad – Eco Friendly Ride | Axigear",
    description: "Switch to eco-friendly mobility in Hyderabad with zero-emission electric scooters for a cleaner future.",
    keywords: "eco-friendly electric scooter, zero-emission e-scooty, sustainable transport",
    ogTitle: "Electric Scooters in Hyderabad – Eco Friendly Ride | Axigear",
    ogDescription: "Switch to eco-friendly mobility in Hyderabad with zero-emission electric scooters for a cleaner future.",
    path: "/eco-friendly"
  },
  highPerformance: {
    title: "High Performance Electric Scooters in Hyderabad | Axigear",
    description: "Experience powerful electric scooters with fast charging, high speed, and long battery life.",
    keywords: "high performance electric scooter, fast charging, long battery life",
    ogTitle: "High Performance Electric Scooters in Hyderabad | Axigear",
    ogDescription: "Experience powerful electric scooters with fast charging, high speed, and long battery life.",
    path: "/high-performance"
  },
  fastCharging: {
    title: "Electric Scooters with Fast Charging in Hyderabad | Axigear",
    description: "Choose EV scooters with fast charging technology for uninterrupted daily travel in Hyderabad.",
    keywords: "fast charging electric scooter, quick charge e-scooty, rapid charging technology",
    ogTitle: "Electric Scooters with Fast Charging in Hyderabad | Axigear",
    ogDescription: "Choose EV scooters with fast charging technology for uninterrupted daily travel in Hyderabad.",
    path: "/fast-charging"
  },
  students: {
    title: "Best EV Scooters for Students in Hyderabad | Axigear",
    description: "Affordable and lightweight electric scooters perfect for students and short-distance commuting.",
    keywords: "electric scooter for students, affordable e-scooty, short distance commute",
    ogTitle: "Best EV Scooters for Students in Hyderabad | Axigear",
    ogDescription: "Affordable and lightweight electric scooters perfect for students and short-distance commuting.",
    path: "/students"
  },
  smartFeatures: {
    title: "Electric Scooters with Smart Features in Hyderabad | Axigear",
    description: "Explore smart electric scooters with app connectivity, navigation, and advanced safety features.",
    keywords: "smart electric scooter, app connectivity, advanced safety features, navigation",
    ogTitle: "Electric Scooters with Smart Features in Hyderabad | Axigear",
    ogDescription: "Explore smart electric scooters with app connectivity, navigation, and advanced safety features.",
    path: "/smart-features"
  },
  brands: {
    title: "Top Electric Scooter Brands in Hyderabad | Axigear",
    description: "Compare leading EV scooter brands available in Hyderabad with pricing, features, and performance.",
    keywords: "electric scooter brands, top EV brands, scooter comparison",
    ogTitle: "Top Electric Scooter Brands in Hyderabad | Axigear",
    ogDescription: "Compare leading EV scooter brands available in Hyderabad with pricing, features, and performance.",
    path: "/brands"
  },
  underLakh: {
    title: "Electric Scooters Under ₹1 Lakh in Hyderabad | Axigear",
    description: "Find budget electric scooters under ₹1 lakh with great mileage and low maintenance cost.",
    keywords: "electric scooter under 1 lakh, budget e-scooter, affordable high mileage",
    ogTitle: "Electric Scooters Under ₹1 Lakh in Hyderabad | Axigear",
    ogDescription: "Find budget electric scooters under ₹1 lakh with great mileage and low maintenance cost.",
    path: "/under-1-lakh"
  },
  premium: {
    title: "Premium Electric Scooters in Hyderabad – Long Range | Axigear",
    description: "Discover premium EV scooters offering up to 200+ km range and advanced performance features.",
    keywords: "premium electric scooter, 200 km range, advanced features, luxury e-scooty",
    ogTitle: "Premium Electric Scooters in Hyderabad – Long Range | Axigear",
    ogDescription: "Discover premium EV scooters offering up to 200+ km range and advanced performance features.",
    path: "/premium"
  },
  bestMileage: {
    title: "Electric Scooters with Best Mileage in Hyderabad | Axigear",
    description: "Choose high-mileage electric scooters designed for efficient and cost-effective travel.",
    keywords: "best mileage electric scooter, high efficiency e-scooty, cost-effective",
    ogTitle: "Electric Scooters with Best Mileage in Hyderabad | Axigear",
    ogDescription: "Choose high-mileage electric scooters designed for efficient and cost-effective travel.",
    path: "/best-mileage"
  },
  buyOnline: {
    title: "Buy Electric Scooty Online in Hyderabad | Axigear",
    description: "Shop electric scooters online with easy booking, fast delivery, and great offers in Hyderabad.",
    keywords: "buy electric scooter online, online booking, fast delivery, special offers",
    ogTitle: "Buy Electric Scooty Online in Hyderabad | Axigear",
    ogDescription: "Shop electric scooters online with easy booking, fast delivery, and great offers in Hyderabad.",
    path: "/buy-online"
  },
  emiOffers: {
    title: "Electric Scooters with EMI Offers in Hyderabad | Axigear",
    description: "Get electric scooters with flexible EMI options and low upfront cost in Hyderabad.",
    keywords: "electric scooter EMI, flexible payment options, low down payment",
    ogTitle: "Electric Scooters with EMI Offers in Hyderabad | Axigear",
    ogDescription: "Get electric scooters with flexible EMI options and low upfront cost in Hyderabad.",
    path: "/emi-offers"
  },
  cityRide: {
    title: "Best Electric Scooters for City Ride in Hyderabad | Axigear",
    description: "Upgrade your daily ride with efficient, stylish, and reliable electric scooters designed for city commuting.",
    keywords: "electric scooter city ride, stylish e-scooty, urban commuting, reliable",
    ogTitle: "Best Electric Scooters for City Ride in Hyderabad | Axigear",
    ogDescription: "Upgrade your daily ride with efficient, stylish, and reliable electric scooters designed for city commuting.",
    path: "/city-ride"
  }
};
