import { Component, OnInit } from '@angular/core';
export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  task1!: Task[];
  task2!: Task[];

  constructor() {}

  ngOnInit(): void {
    this.task1 = [
      {
        id: 1,
        title: 'HTML&CSS',
        isDone: true,
      },
      {
        id: 2,
        title: 'JS',
        isDone: true,
      },
      {
        id: 3,
        title: 'Angular',
        isDone: true,
      },
      {
        id: 4,
        title: 'React',
        isDone: true,
      },
    ];
    this.task2 = [
      { id: 1, title: 'Buy computer', isDone: true },
      { id: 1, title: 'Buy smartphone', isDone: true },
    ];
  }

  addTask(task: Task) {
    this.task1.push(task);
  }

  deleteTask(id: number) {
    this.task1 = this.task1.filter((task) => task.id != id);
  }
}
