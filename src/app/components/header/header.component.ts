import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activatedFavs = false;

  constructor(private readonly router: Router, private readonly productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.favsProducts.subscribe((res) => (this.activatedFavs = res.length > 0));
  }

  reset() {
    this.productsService.reset.next(true);
    window.scrollTo(0, 0);
  }

  openFavs() {
    this.router.navigate([{ outlets: { fav: ['products'] } }], { skipLocationChange: true });
  }
}
