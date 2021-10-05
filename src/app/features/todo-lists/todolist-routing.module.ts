import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListsComponent } from './todo-lists.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: '', component: TodoListsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
