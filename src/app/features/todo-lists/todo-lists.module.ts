import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoListItemComponent } from './pages/todo-list-item/todo-list-item.component';
import { TodoListsComponent } from './todo-lists.component';
import { TodoListRoutingModule } from './todolist-routing.module';

@NgModule({
  declarations: [TodoListsComponent, TodoListItemComponent],
  imports: [CommonModule, TodoListRoutingModule, SharedModule],
})
class TodoListsModule {}
