import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearcherComponent } from './searcher/searcher.component';
import { GridComponent } from './grid/grid.component';
import { ProductComponent } from './product/product.component';
import { SortComponent } from './sort/sort.component';
import { RouterModule } from '@angular/router';
import { FavProductComponent } from './fav-product/fav-product.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearcherComponent, GridComponent, ProductComponent, SortComponent, FavProductComponent],
  imports: [CommonModule, InfiniteScrollModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, GridComponent, FavProductComponent]
})
export class ComponentsModule {}
