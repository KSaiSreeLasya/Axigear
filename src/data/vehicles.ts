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
  }
];
