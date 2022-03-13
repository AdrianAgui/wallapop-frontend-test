import { ProductsService } from './../../services/products/products.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  selectedItem = '';
  @Output() sortType: EventEmitter<string> = new EventEmitter<string>();

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.reset.subscribe((reset) => {
      if (reset) {
        this.selectedItem = '';
        this.sortType.emit('');
      }
    });
  }

  onChange(value: string) {
    this.selectedItem = value;
    this.sortType.emit(value);
  }
}
