import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-fav-product',
  templateUrl: './fav-product.component.html',
  styleUrls: ['./fav-product.component.scss']
})
export class FavProductComponent {
  @Input() prod: Product | undefined;
  @Output() remove: EventEmitter<Product> = new EventEmitter<Product>();

  removeItem() {
    this.remove.emit(this.prod);
  }
}
