import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product, ProductsResponse } from '../interfaces/product.interface';

const endpoint = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [];

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.products.length > 0 ? of(this.products) : this.http.get<ProductsResponse>(endpoint).pipe(map((res: ProductsResponse) => res.items));
  }

  setProducts(prods: Product[]) {
    this.products = prods;
  }
}
