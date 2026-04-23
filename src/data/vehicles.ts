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
    id: 'axigear-hestur-werewolf',
    name: 'Axigear Hestur Werewolf',
    type: 'Electric Scooter',
    range: '120 km (Extensible to 300 km)',
    acceleration: 'High Performance',
    topSpeed: '',
    basePrice: 95000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fcb8e28b98e7d478c907b197aa0e49640%2F537a31a658544d2580e4f2051d168cbd?format=webp&width=800&height=1200',
    description: 'Premium electric scooter with extended range capability and advanced features.',
    colors: [
      { name: 'Steel Grey', hex: '#70757e', price: 0 },
      { name: 'Ocean Blue', hex: '#0066ff', price: 2000 },
    ]
  },
  {
    id: 'axigear-sport',
    name: 'Axigear Sport',
    type: 'Electric Scooter',
    range: '100 km',
    acceleration: 'Standard',
    topSpeed: '',
    basePrice: 85000,
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fcb8e28b98e7d478c907b197aa0e49640%2Fe75557a683e246189cdca8da38d5d9e6?format=webp&width=800&height=1200',
    description: 'Sport-focused electric scooter for dynamic commuting with stylish design.',
    colors: [
      { name: 'Vibrant Blue', hex: '#0066ff', price: 0 },
      { name: 'Sunset Orange', hex: '#ff6b35', price: 1500 },
      { name: 'Hot Pink', hex: '#ff1493', price: 1500 },
    ]
  },
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
