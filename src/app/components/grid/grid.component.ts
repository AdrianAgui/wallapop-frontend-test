import { Component, OnInit } from '@angular/core';
import { SearcherService } from 'src/app/services/searcher/searcher.service';
import { SortsService } from 'src/app/services/sorts/sorts.service';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  products: Product[] = [];

  private sortType: string | undefined;
  private textSearch = '';
  private limit = 6;

  constructor(
    private readonly productsService: ProductsService,
    private readonly sortsService: SortsService,
    private readonly searcherService: SearcherService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.onSearch();
  }

  sortProducts(sortType: string) {
    this.sortType = sortType;

    if (!this.textSearch) {
      this.products = this.sortsService.sortProducts(this.productsService.getAllProducts(), sortType).slice(0, this.limit);
    } else {
      const searchResult = this.search();
      this.products = this.sortsService.sortProducts(searchResult, sortType);
    }
  }

  onScroll() {
    if (!this.textSearch) {
      this.limit = this.limit + 3;
      this.getProducts();
    }
  }

  private getProducts() {
    this.productsService.getProducts(0, this.limit).subscribe((prods) => {
      this.products = !this.sortType ? prods : this.sortsService.sortProducts(prods, this.sortType);
    });
  }

  private onSearch() {
    this.searcherService.onSearchChange.subscribe((text) => {
      if (text.length >= 2) {
        this.textSearch = text.toLowerCase();
        const searchResult = this.search();
        this.products = !this.sortType ? searchResult : this.sortsService.sortProducts(searchResult, this.sortType);
      } else {
        this.getProducts();
      }
    });
  }

  private search() {
    return this.productsService.getAllProducts().filter((prod: Product) => {
      const { title, descr, email } = this.productToLowerCase(prod);
      return title.includes(this.textSearch) || descr.includes(this.textSearch) || email.includes(this.textSearch) || prod.price === this.textSearch;
    });
  }

  private productToLowerCase(product: Product) {
    return {
      title: product.title.toLowerCase(),
      descr: product.description.toLowerCase(),
      email: product.email.toLowerCase()
    };
  }
}
