import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TodoListItemComponent } from './todo-lists/pages/todo-list-item/todo-list-item.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';

@NgModule({
  declarations: [HomeComponent, TodoListsComponent, TodoListItemComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
