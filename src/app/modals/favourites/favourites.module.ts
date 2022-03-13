import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesRoutingModule } from './favourites-routing.module';

import { FavouritesComponent } from './favourites.component';
import { FavProductComponent } from './fav-product/fav-product.component';

@NgModule({
  declarations: [FavouritesComponent, FavProductComponent],
  imports: [CommonModule, FavouritesRoutingModule]
})
export class FavouritesModule {}
