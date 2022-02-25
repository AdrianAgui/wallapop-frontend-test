import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitGuard } from './guards/init.guard';
import { MainComponent } from './pages/main/main.component';
import { FavouritesComponent } from './modals/favourites/favourites.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [InitGuard]
  },
  {
    path: 'products',
    component: FavouritesComponent,
    outlet: 'fav'
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
