import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product | undefined;

  constructor(private readonly productsService: ProductsService) {}

  toggleFav() {
    if (this.product) {
      this.productsService.toggleFav(this.product);
    }
  }
}
