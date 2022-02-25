import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites/favourites.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [FavouritesComponent]
})
export class ModalsModule {}
