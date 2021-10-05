import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const defaultRoute = '';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/home.module').then((m) => m.HomeModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: defaultRoute },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
