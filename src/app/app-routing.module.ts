import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitGuard } from './guards/init.guard';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    // TODO: change canactivate with resolver
    // resolve: { messages: InboxResolver },
    canActivate: [InitGuard],
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
