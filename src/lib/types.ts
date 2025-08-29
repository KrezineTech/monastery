
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  videoUrl?: string;
  description?: string;
  aiHint?: string;
  category?: string;
  title?: string;
  subtitle?: string;
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
