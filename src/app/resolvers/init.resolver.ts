import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { Observable } from 'rxjs';

import { Product } from '../interfaces/product.interface';
import { ProductsService } from '../services/products/products.service';

@Injectable({
  providedIn: 'root'
})
export class InitResolver implements Resolve<Product[]> {
  constructor(private readonly productsService: ProductsService) {}

  resolve(): Observable<Product[]> {
    registerLocaleData(es);
    return this.productsService.getProducts();
  }
}
