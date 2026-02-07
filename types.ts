export type Language = 'en' | 'ar';

export type SortOrder = 'newest' | 'price-asc' | 'price-desc';

export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  originalPrice?: number; 
  price: number; 
  discountPercentage?: number; // New field
  category: 'Men' | 'Women' | 'New Collection' | 'Best Sellers' | 'Offers';
  subCategory?: string;
  sizes: string[];
  colors: string[];
  images: string[];
  videoUrl?: string; 
  views: number;
  salesCount: number;
  stock: number;
  createdAt: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  photos: string[];
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  paymentMethod: 'Online' | 'COD';
  date: string;
  day: string;
  time: string;
}

export interface Translation {
  [key: string]: {
    en: string;
    ar: string;
  };
}
