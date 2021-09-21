import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

const defaultRoute = '';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/login/login.module').then((m) => m.LoginModule),
      },
      { path: '**', pathMatch: 'full', redirectTo: defaultRoute },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
