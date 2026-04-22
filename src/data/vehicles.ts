export interface VehicleColor {
  name: string;
  hex: string;
  price: number;
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  range: string;
  acceleration: string;
  topSpeed: string;
  basePrice: number;
  image: string;
  description: string;
  colors: VehicleColor[];
}

export const vehicles: Vehicle[] = [
  {
    id: 'axigear-elite-rto',
    name: 'Axigear Elite RTO',
    type: 'RTO Registered',
    range: '120 km',
    acceleration: 'High Performance',
    topSpeed: '80 km/h',
    basePrice: 120000,
    image: 'https://images.pexels.com/photos/29766153/pexels-photo-29766153.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000',
    description: 'Premium RTO-registered electric scooter for longer commutes with full regulatory compliance.',
    colors: [
      { name: 'Matte Black', hex: '#1a1a1a', price: 0 },
      { name: 'Glossy White', hex: '#ffffff', price: 2000 },
      { name: 'Electric Blue', hex: '#0066ff', price: 3000 },
    ]
  },
  {
    id: 'axigear-pro-rto',
    name: 'Axigear Pro RTO',
    type: 'RTO Registered',
    range: '100 km',
    acceleration: 'Premium',
    topSpeed: '70 km/h',
    basePrice: 85000,
    image: 'https://images.pexels.com/photos/20164662/pexels-photo-20164662.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000',
    description: 'Performance-focused RTO scooter perfect for daily commuting with advanced features.',
    colors: [
      { name: 'Stealth Black', hex: '#0f172a', price: 0 },
      { name: 'Pearl Silver', hex: '#c0c0c0', price: 1500 },
      { name: 'Sunset Orange', hex: '#ff6b35', price: 2500 },
    ]
  },
  {
    id: 'axigear-smart-nonrto',
    name: 'Axigear Smart Non-RTO',
    type: 'Non-RTO',
    range: '60 km',
    acceleration: 'Standard',
    topSpeed: '50 km/h',
    basePrice: 50000,
    image: 'https://images.pexels.com/photos/2976179/pexels-photo-2976179.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000',
    description: 'Affordable non-RTO scooter ideal for short-distance urban commutes without registration hassle.',
    colors: [
      { name: 'Jet Black', hex: '#111111', price: 0 },
      { name: 'Sky Blue', hex: '#87ceeb', price: 1000 },
      { name: 'Forest Green', hex: '#228b22', price: 1500 },
    ]
  },
  {
    id: 'axigear-lite-nonrto',
    name: 'Axigear Lite Non-RTO',
    type: 'Non-RTO',
    range: '50 km',
    acceleration: 'Standard',
    topSpeed: '45 km/h',
    basePrice: 35000,
    image: 'https://images.pexels.com/photos/29766153/pexels-photo-29766153.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000',
    description: 'Budget-friendly electric scooter for convenient last-mile connectivity and daily errands.',
    colors: [
      { name: 'Classic Black', hex: '#2a2a2a', price: 0 },
      { name: 'Vibrant Red', hex: '#ff0000', price: 1200 },
      { name: 'Golden Yellow', hex: '#ffd700', price: 1000 },
    ]
  },
  {
    id: 'axigear-sport-bike',
    name: 'Axigear Sport Bike',
    type: 'RTO Registered',
    range: '130 km',
    acceleration: 'High Performance',
    topSpeed: '85 km/h',
    basePrice: 110000,
    image: 'https://images.pexels.com/photos/2976179/pexels-photo-2976179.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=1000',
    description: 'High-performance electric bike with premium features and extended range for serious riders.',
    colors: [
      { name: 'Midnight Purple', hex: '#191970', price: 0 },
      { name: 'Racing Red', hex: '#dc143c', price: 2000 },
      { name: 'Titanium Gray', hex: '#808080', price: 2500 },
    ]
  }
];
