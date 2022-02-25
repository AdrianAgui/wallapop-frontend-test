import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class SortsService {
  sortProducts(products: Product[], sortType: string): Product[] {
    if (sortType === 'title' || sortType === 'description' || sortType === 'email') {
      return this.sortByText(products, sortType);
    } else if (sortType === 'price') {
      return this.sortByPrice(products);
    }
    return products;
  }

  private sortByText(products: Product[], sortType: string) {
    return products.sort((a: any, b: any) => {
      if (a[sortType].toLowerCase() < b[sortType].toLowerCase()) {
        return -1;
      }
      if (a[sortType].toLowerCase() > b[sortType].toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  private sortByPrice(products: Product[]) {
    return products.sort((a: any, b: any) => a['price'] - b['price']);
  }
}
