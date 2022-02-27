import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable } from 'rxjs';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

import { ProductsService } from '../services/products/products.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {
  constructor(private readonly productsService: ProductsService) {}

  canActivate(): Observable<boolean> {
    registerLocaleData(es);
    return this.productsService.getProducts().pipe(map(() => true));
  }
}
