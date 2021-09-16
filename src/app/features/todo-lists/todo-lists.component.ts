import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';

export interface TaskInterface {
  id: string;
  title: string;
  isDone: boolean;
}
@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss'],
})
export class TodoListsComponent implements OnInit {
  task1!: TaskInterface[];
  task2!: TaskInterface[];
  constructor() {}

  ngOnInit(): void {
    this.task1 = [
      {
        id: uuid.v4(),
        title: 'HTML&CSS',
        isDone: true,
      },
      {
        id: uuid.v4(),
        title: 'JS',
        isDone: false,
      },
      {
        id: uuid.v4(),
        title: 'Angular',
        isDone: true,
      },
      {
        id: uuid.v4(),
        title: 'React',
        isDone: false,
      },
    ];
    this.task2 = [
      { id: uuid.v4(), title: 'Buy computer', isDone: true },
      { id: uuid.v4(), title: 'Buy smartphone', isDone: true },
    ];
  }
}
