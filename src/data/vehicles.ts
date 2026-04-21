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
    id: 'axigear-omega',
    name: 'Axigear Omega',
    type: 'Ultimate Luxury',
    range: '512 mi',
    acceleration: '2.18s',
    topSpeed: '190 mph',
    basePrice: 125000,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600',
    description: 'The masterclass of automotive comfort and silence. Redefining what a flagship can be.',
    colors: [
      { name: 'Celestial White', hex: '#fdfcf0', price: 0 },
      { name: 'Deep Space', hex: '#0f172a', price: 3000 },
      { name: 'Phantom Gold', hex: '#78350f', price: 5000 },
    ]
  },
  {
    id: 'axigear-prime',
    name: 'Axigear Prime',
    type: 'Grand Tourer',
    range: '520 mi',
    acceleration: '2.1s',
    topSpeed: '200 mph',
    basePrice: 89000,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600',
    description: 'The pinnacle of electric performance. Engineered for distance, designed for status.',
    colors: [
      { name: 'Obsidian Black', hex: '#000000', price: 0 },
      { name: 'Pearl White', hex: '#ffffff', price: 1500 },
      { name: 'Midnight Blue', hex: '#1e3a8a', price: 2000 },
      { name: 'Titanium Silver', hex: '#94a3b8', price: 2000 },
    ]
  },
  {
    id: 'axigear-x',
    name: 'Axigear Model X',
    type: 'Performance SUV',
    range: '410 mi',
    acceleration: '3.4s',
    topSpeed: '155 mph',
    basePrice: 75000,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1600',
    description: 'Versatility meets velocity. The family vehicle redefined for the electric age.',
    colors: [
      { name: 'Forest Green', hex: '#064e3b', price: 0 },
      { name: 'Crimson Red', hex: '#991b1b', price: 2000 },
      { name: 'Arctic White', hex: '#f8fafc', price: 1500 },
    ]
  },
  {
    id: 'axigear-nexus',
    name: 'Axigear Nexus',
    type: 'City Compact',
    range: '310 mi',
    acceleration: '5.2s',
    topSpeed: '110 mph',
    basePrice: 45000,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1600',
    description: 'Agile, intelligent, and perfectly sized for the modern metropolis.',
    colors: [
      { name: 'Cyber Yellow', hex: '#eab308', price: 0 },
      { name: 'Space Gray', hex: '#4b5563', price: 1000 },
      { name: 'Neon Blue', hex: '#3b82f6', price: 1000 },
    ]
  },
  {
    id: 'axigear-vertigo',
    name: 'Axigear Vertigo',
    type: 'Hypercar',
    range: '450 mi',
    acceleration: '1.8s',
    topSpeed: '250 mph',
    basePrice: 210000,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1600',
    description: 'Breaking the laws of physics. Pure adrenaline, zero emissions.',
    colors: [
      { name: 'Electric Purple', hex: '#7c3aed', price: 0 },
      { name: 'Carbon Black', hex: '#111827', price: 5000 },
      { name: 'Apex Orange', hex: '#f97316', price: 5000 },
    ]
  }
];
