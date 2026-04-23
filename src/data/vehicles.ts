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
    id: 'axigear-elite',
    name: 'Axigear Elite',
    type: 'Electric Scooter',
    range: '80 km',
    acceleration: 'High Performance',
    topSpeed: '',
    basePrice: 65000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F2f195b82614d46a0b777d649ad418b24%2Fd7010e865a804b779126c05500716b81?format=webp&width=800&height=1200',
    description: 'Premium electric scooter with sleek design and impressive performance.',
    colors: [
      { name: 'Jet Black', hex: '#111111', price: 0 },
      { name: 'Vibrant Red', hex: '#ff0000', price: 1000 },
    ]
  },
  {
    id: 'axigear-hester-dyno',
    name: 'Axigear Hester Dyno',
    type: 'Electric Scooter',
    range: '80 km',
    acceleration: 'Dynamic Performance',
    topSpeed: '',
    basePrice: 65000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F2f195b82614d46a0b777d649ad418b24%2F31c5a499104f4461bea8bd77f04e62fc?format=webp&width=800&height=1200',
    description: 'Dynamic electric scooter engineered for performance and style.',
    colors: [
      { name: 'Steel Grey', hex: '#70757e', price: 0 },
      { name: 'Ocean Blue', hex: '#0066ff', price: 1500 },
      { name: 'Maroon', hex: '#800000', price: 1500 },
      { name: 'Jet Black', hex: '#111111', price: 1000 },
    ]
  },
  {
    id: 'axigear-green-udaan',
    name: 'Axigear Green Udaan',
    type: 'Electric Scooter',
    range: '60 km',
    acceleration: 'Standard',
    topSpeed: '25 km/h',
    basePrice: 35000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2F2f195b82614d46a0b777d649ad418b24%2Ff202638d6ff049e48477e65f9bdc1f30?format=webp&width=800&height=1200',
    description: 'Eco-friendly electric scooter perfect for daily commuting.',
    colors: [
      { name: 'Mint Green', hex: '#98ff98', price: 0 },
      { name: 'Forest Green', hex: '#228b22', price: 1000 },
    ]
  }
];
