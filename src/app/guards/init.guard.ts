import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {
  constructor(private readonly productsService: ProductsService) {}

  canActivate(): Observable<boolean> {
    return this.productsService.getProducts().pipe(
      map((prods: Product[]) => {
        if (prods && prods.length > 0) {
          this.productsService.setProducts(prods);
          return true;
        }
        return false;
      })
    );
  }
}
