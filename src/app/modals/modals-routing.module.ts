import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {
    path: 'favs',
    component: FavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsRoutingModule {}
