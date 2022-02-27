import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearcherService } from 'src/app/services/searcher/searcher.service';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private readonly eRef: ElementRef,
    private readonly router: Router,
    private readonly productsService: ProductsService,
    private readonly searcherService: SearcherService
  ) {}

  @HostListener('document:keydown.escape', [])
  onKeydownEsc() {
    this.close();
  }

  // @HostListener('document:click', ['$event'])
  // clickout(event: any) {
  //   if (!this.eRef.nativeElement.contains(event.target)) {
  //     this.close();
  //   }
  // }

  ngOnInit(): void {
    this.products = this.productsService.getFavProducts();
    this.filteredProducts = this.products;
    this.hiddenBodyOverflow();
  }

  filterChange(event: any) {
    this.filteredProducts = !event.value
      ? this.products
      : this.products.filter((prod) => this.searcherService.normalize(prod.title).includes(this.searcherService.normalize(event.value)));
  }

  removeFav(prodToRemove: Product) {
    this.products = this.products.filter((p) => p.title !== prodToRemove.title && p.email !== prodToRemove.email);
    this.filteredProducts = this.filteredProducts.filter((p) => p.title !== prodToRemove.title && p.email !== prodToRemove.email);
    this.productsService.toggleFav(prodToRemove);
    this.productsService.uncheckGridProduct(prodToRemove);

    if (this.products.length === 0) {
      this.close();
    }
  }

  close() {
    this.showBodyOverflow();
    this.router.navigate([{ outlets: { fav: null } }]);
  }

  private hiddenBodyOverflow() {
    document.body.classList.add('overflow-hidden');
    document.body.classList.add('padding-right');
  }

  private showBodyOverflow() {
    document.body.classList.remove('overflow-hidden');
    document.body.classList.remove('padding-right');
  }
}
