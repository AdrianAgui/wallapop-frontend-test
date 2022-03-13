export interface Product {
  id: number;
  description: string;
  email: string;
  image: string;
  price: string;
  title: string;
  checked?: boolean;
}

export interface ProductsResponse {
  items: Product[];
}
