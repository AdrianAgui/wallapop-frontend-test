export interface Product {
  id: number;
  description: string;
  email: string;
  image: string;
  price: string;
  title: string;
}

export interface ProductsResponse {
  items: Product[];
}
