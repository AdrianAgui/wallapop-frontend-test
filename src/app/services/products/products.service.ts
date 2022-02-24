import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product, ProductsResponse } from '../../interfaces/product.interface';

const endpoint = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private allProducts: Product[] = [];

  constructor(private readonly http: HttpClient) {}

  getProducts(offset?: number, limit?: number): Observable<Product[]> {
    return this.allProducts.length > 0
      ? of(this.allProducts.slice(offset, limit))
      : this.http.get<ProductsResponse>(endpoint).pipe(
          map((res: ProductsResponse) => {
            this.allProducts = res.items;
            return res.items;
          })
        );
  }

  getAllProducts() {
    return this.allProducts;
  }
}
