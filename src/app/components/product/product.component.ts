import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product | undefined;

  private clicked = false;

  constructor(private readonly productsService: ProductsService) {}

  toggleFav() {
    if (this.product && !this.clicked) {
      this.clicked = true;
      this.productsService.toggleFav(this.product);

      setTimeout(() => {
        this.clicked = false;
      }, 0);
    }
  }
}
