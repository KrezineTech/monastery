
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery?: string[];
  videoUrl?: string;
  description?: string;
  aiHint?: string;
  category?: string;
  title?: string;
  subtitle?: string;
  volumes?: string[];
}

export interface Category {
  name: string;
  image: string;
  mobileImage?: string;
  aiHint?: string;
}

export interface Reel {
  id: string;
  videoUrl: string;
  aiHint?: string;
  product: Product;
}

export interface InstagramPost {
  id:string;
  image: string;
  aiHint?: string;
}

export type ProductMedia = {
    type: 'image' | 'video';
    src: string;
    thumbnail: string;
};

export interface Blog {
  id: string;
  title: string;
  image: string;
  aiHint?: string;
  date: string;
  author: string;
  excerpt: string;
  content: string; 
}

export interface WishlistItem {
    id: string;
    product: Product;
}
