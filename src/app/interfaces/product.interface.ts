export interface Product {
  description: string;
  email: string;
  image: string;
  price: string;
  title: string;
}

export interface ProductsResponse {
  items: Product[];
}
