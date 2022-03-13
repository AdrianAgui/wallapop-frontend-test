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
        path: 'products',
        loadChildren: () => import('./modals/modals.module').then((m) => m.ModalsModule),
        outlet: 'fav'
      },
      { path: '**', component: MainComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
