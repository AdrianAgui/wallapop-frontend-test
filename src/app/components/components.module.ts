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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearcherComponent, GridComponent, ProductComponent, SortComponent],
  imports: [CommonModule, InfiniteScrollModule, RouterModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, GridComponent]
})
export class ComponentsModule {}
