export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isSpicy?: boolean;
  isVeg?: boolean;
  isHot?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
  crust?: string;
}

export enum Page {
  Menu = 'menu',
  Product = 'product',
  Cart = 'cart',
  Checkout = 'checkout',
  Confirmation = 'confirmation',
  About = 'about',
  Blog = 'blog',
  BlogPost = 'blog-post'
}