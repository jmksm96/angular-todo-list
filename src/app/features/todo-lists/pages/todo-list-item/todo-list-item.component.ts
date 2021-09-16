import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as uuid from 'uuid';
import { TaskInterface } from '../../todo-lists.component';

type Filters = 'all' | 'active' | 'completed';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() tasks!: TaskInterface[];

  form!: FormGroup;
  filters: Filters = 'all';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: this.fb.control(''),
    });
  }

  ngOnInit(): void {}

  addTask() {
    let newTask = {
      id: uuid.v4(),
      title: this.form.get('input')?.value,
      isDone: true,
    };
    this.tasks.push(newTask);
    this.form.reset();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  allFilter() {}

  activeFilter(filter?: string) {
    //   if (filter === 'active') {
    //     let tasksForTodoList = this.task1;
    //     this.task1 = this.task1.filter((t) => t.isDone === false);
    //   }
  }
  completedFilter(filter?: string) {
    //   if (filter === 'completed') {
    //     let tasksForTodoList = this.task1;
    //     tasksForTodoList = this.task1.filter((t) => t.isDone === true);
    //     console.log(this.task1);
    //   }
  }
}
