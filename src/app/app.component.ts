import { Component } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wallapop-frontend-test';
  products: Product[] = [];

  constructor() {}
}
