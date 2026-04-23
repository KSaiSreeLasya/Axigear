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
    id: 'axigear-smart',
    name: 'Axigear Smart',
    type: 'Electric Scooter',
    range: '60 km',
    acceleration: 'Standard',
    topSpeed: '50 km/h',
    basePrice: 50000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fcb8e28b98e7d478c907b197aa0e49640%2F537a31a658544d2580e4f2051d168cbd?format=webp&width=800&height=1200',
    description: 'Affordable electric scooter ideal for short-distance urban commutes.',
    colors: [
      { name: 'Jet Black', hex: '#111111', price: 0 },
      { name: 'Sky Blue', hex: '#87ceeb', price: 1000 },
      { name: 'Forest Green', hex: '#228b22', price: 1500 },
    ]
  },
  {
    id: 'axigear-lite',
    name: 'Axigear Lite',
    type: 'Electric Scooter',
    range: '50 km',
    acceleration: 'Standard',
    topSpeed: '45 km/h',
    basePrice: 35000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fcb8e28b98e7d478c907b197aa0e49640%2Fe75557a683e246189cdca8da38d5d9e6?format=webp&width=800&height=1200',
    description: 'Budget-friendly electric scooter for convenient last-mile connectivity and daily errands.',
    colors: [
      { name: 'Classic Black', hex: '#2a2a2a', price: 0 },
      { name: 'Vibrant Red', hex: '#ff0000', price: 1200 },
      { name: 'Golden Yellow', hex: '#ffd700', price: 1000 },
    ]
  }
];
