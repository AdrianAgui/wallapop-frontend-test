import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class SortsService {
  sortProducts(products: Product[], sortType: string): Product[] {
    switch (sortType) {
      case 'title':
        products = this.sortByTitle(products);
        break;

      default:
        products = this.sortByTitle(products);
        break;
    }
    console.log(products);
    return products;
  }

  private sortByTitle(products: Product[]) {
    return products;
  }

  private sortByDescription(products: Product[]) {
    return products;
  }

  private sortByEmail(products: Product[]) {
    return products;
  }

  private sortByPrice(products: Product[]) {
    return products;
  }
}
