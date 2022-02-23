import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((d) => {
      console.table(d);
    });
  }
}
