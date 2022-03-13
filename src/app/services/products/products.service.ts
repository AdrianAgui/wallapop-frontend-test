import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { Product, ProductsResponse } from '../../interfaces/product.interface';

const endpoint = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Product[] = [];
  favsProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  reset: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly http: HttpClient) {}

  getProducts(offset?: number, limit?: number): Observable<Product[]> {
    return this.allProducts.length > 0
      ? of(this.allProducts.slice(offset, limit))
      : this.http.get<ProductsResponse>(endpoint).pipe(
          map((res: ProductsResponse) => {
            res.items = this.setProductsIds(res);
            this.allProducts = res.items;
            return res.items;
          })
        );
  }

  getAllProducts() {
    return this.allProducts;
  }

  toggleFav(favProd: Product) {
    const product = this.findProduct(favProd.id);
    if (product) {
      product.checked = !product.checked;
      this.favsProducts.next(this.allProducts.filter((prod: Product) => prod.checked));
    }
  }

  private findProduct(id: number) {
    return this.allProducts.find((prod: Product) => prod.id === id);
  }

  private setProductsIds(list: ProductsResponse) {
    return list.items.map((item, index) => {
      return { ...item, id: index + 1 };
    });
  }
}
