import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

// @NgModule({
//   declarations: [LoginComponent],
//   imports: [CommonModule],
// })

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: 'login', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
