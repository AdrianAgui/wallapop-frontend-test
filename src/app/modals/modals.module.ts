import { ComponentsModule } from './../components/components.module';
import { FavouritesComponent } from './favourites/favourites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsRoutingModule } from './modals-routing.module';

@NgModule({
  imports: [CommonModule, ModalsRoutingModule, ComponentsModule],
  declarations: [FavouritesComponent],
  exports: [FavouritesComponent]
})
export class ModalsModule {}
