
export interface Room {
  id: string;
  title: string;
  desc: string;
  features: string[];
  img: string;
  priceRange: string;
}

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
