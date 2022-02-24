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

  private readonly offset = 0;
  private readonly limit = 6;

  constructor(
    private readonly productsService: ProductsService,
    private readonly sortsService: SortsService,
    private readonly searcherService: SearcherService
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.searcherService.onSearchChange.subscribe((text) => {
      if (text.length >= 2) {
        text = text.toLowerCase();
        const searchResult = this.productsService.getAllProducts().filter((prod: Product) => {
          const { title, descr, email } = this.productToLowerCase(prod);
          return title.includes(text) || descr.includes(text) || email.includes(text) || prod.price === text;
        });

        if (!this.sortType) {
          this.products = searchResult;
        } else {
          this.products = this.sortsService.sortProducts(searchResult, this.sortType);
        }
      } else {
        this.getProducts();
      }
    });
  }

  sortProducts(sortType: string) {
    this.sortType = sortType;
    this.products = this.sortsService.sortProducts(this.products, sortType);
  }

  private getProducts() {
    this.productsService.getProducts(this.offset, this.limit).subscribe((prods) => {
      this.products = prods;
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
