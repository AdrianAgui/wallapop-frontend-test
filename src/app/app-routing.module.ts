import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitResolver } from './resolvers/init.resolver';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    resolve: { products: InitResolver },
    children: [
      {
        path: '**',
        redirectTo: 'home'
      },
      { path: 'home', component: MainComponent },
      {
        path: 'products',
        outlet: 'fav',
        loadChildren: () => import('./modals/modals.module').then((mod) => mod.ModalsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
