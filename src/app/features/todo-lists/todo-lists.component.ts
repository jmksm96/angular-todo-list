import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/interface/todolist';
import { TodoListService } from '../../../services/todo-list.service';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss'],
})
export class TodoListsComponent implements OnInit {
  data!: TodoList[];
  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoListService.getTodoLists().subscribe((res) => {
      this.data = res;
      console.log(res);
    });
  }
  addTodoList(todolist: TodoList[]) {
    this.data = { ...this.data, ...todolist };
  }
}
