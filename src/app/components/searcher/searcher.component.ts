import { ProductsService } from './../../services/products/products.service';
import { Component } from '@angular/core';
import { SearcherService } from '../../services/searcher/searcher.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent {
  inputHasText = false;
  searchValue = '';

  constructor(private readonly searcherService: SearcherService, private readonly productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.reset.subscribe((reset) => {
      if (reset) {
        this.inputHasText = false;
        this.searchValue = '';
      }
    });
  }

  filterChange() {
    this.inputHasText = this.searchValue !== '';
    this.searcherService.onSearchChange.next(this.searchValue);
  }

  focusInput() {
    document.getElementById('filter')?.focus();
  }
}
