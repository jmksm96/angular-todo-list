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

  filterTasks(filter?: string) {
    if (filter === 'active') {
      this.tasks = this.tasks.filter((t) => t.isDone === false);
    } else if (filter === 'completed') {
      this.tasks = this.tasks.filter((t) => t.isDone === true);
    } else if (filter === 'all') {
      this.tasks;
    }
  }
}
