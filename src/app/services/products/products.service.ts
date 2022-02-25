import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { Product, ProductsResponse } from '../../interfaces/product.interface';

const endpoint = 'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private allProducts: Product[] = [];
  private favProducts: Product[] = [];

  favsChange: Subject<number> = new Subject<number>();

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

  getFavProducts() {
    return this.favProducts;
  }

  toggleFav(favProd: Product) {
    const prodIndex = this.favProducts.findIndex((p) => p.title === favProd.title && p.email === favProd.email);
    prodIndex >= 0 ? this.favProducts.splice(prodIndex, 1) : this.favProducts.push(favProd);
    this.favsChange.next(this.favProducts.length);
  }

  uncheckGridProduct(prod: Product) {
    const fav = document.getElementById(`product-${prod.id}`) as HTMLInputElement;
    if (fav) {
      fav.checked = false;
    }
  }

  private setProductsIds(list: ProductsResponse) {
    return list.items.map((item, index) => {
      return { ...item, id: index + 1 };
    });
  }
}
