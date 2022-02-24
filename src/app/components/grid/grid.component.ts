import { Component, OnInit } from '@angular/core';
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

  constructor(private readonly productsService: ProductsService, private readonly sortsService: SortsService) {}

  ngOnInit(): void {
    this.productsService.getProducts(0, 6).subscribe((prods) => {
      console.table(prods);
      this.products = prods;
    });
  }

  sortProducts(sortType: string) {
    this.products = this.sortsService.sortProducts(this.products, sortType);
  }
}
