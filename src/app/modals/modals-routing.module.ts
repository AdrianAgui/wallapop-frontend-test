import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLayoutComponent } from './modal-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ModalLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./favourites/favourites.module').then((mod) => mod.FavouritesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsRoutingModule {}
