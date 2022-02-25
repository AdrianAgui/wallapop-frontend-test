import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activatedFavs = false;

  constructor(private readonly router: Router, private readonly productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.favsChange.subscribe((res) => (this.activatedFavs = res > 0));
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  openFavs() {
    this.router.navigate([{ outlets: { fav: ['products'] } }]);
  }
}
