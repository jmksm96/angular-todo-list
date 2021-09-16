import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListItemComponent } from './pages/todo-list-item/todo-list-item.component';
import { TodoListsComponent } from './todo-lists.component';

@NgModule({
  declarations: [TodoListsComponent, TodoListItemComponent],
  imports: [CommonModule],
})
class TodoListsModule {}
