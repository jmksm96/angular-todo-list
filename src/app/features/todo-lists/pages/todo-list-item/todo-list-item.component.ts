import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tasks } from 'src/app/interface/tasks';
import { TodoList } from 'src/app/interface/todolist';
import * as uuid from 'uuid';
import { TodoListService } from './../../../../../services/todo-list.service';
import { TasksResponse } from './../../../../interface/tasks';

type Filters = 'all' | 'active' | 'completed';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() tasks!: TasksResponse;
  @Input() id!: string;
  @Input() title!: string;
  @Output() todolistsOutput: EventEmitter<TodoList[]> = new EventEmitter<
    TodoList[]
  >();
  form!: FormGroup;
  todolists: TodoList[] = [];
  filters: Filters = 'all';
  task!: Tasks[];
  constructor(private fb: FormBuilder, private dataService: TodoListService) {
    this.form = this.fb.group({
      input: this.fb.control(''),
    });
  }

  ngOnInit(): void {
    this.dataService.getTasks(this.id).subscribe((res) => {
      this.task = res.items;
    });
  }

  addTodoList() {
    // let newTodoList = {
    //   id: uuid.v4(),
    //   title: 'Title',
    // };
    // this.todolists.push(newTodoList);
    // this.todolistsOutput.emit(this.todolists);
  }

  addTask() {
    let newTask = {
      id: uuid.v4(),
      title: this.form.get('input')?.value,
      isDone: false,
    };
    this.tasks.items.push(newTask);
    this.form.reset();
  }

  deleteTask(id: string) {
    this.tasks.items = this.tasks.items.filter((task) => task.id != id);
  }

  filterTasks(filter?: string) {
    // if (filter === 'active') {
    //   this.active = this.tasks.filter((t) => t.isDone === false);
    // } else if (filter === 'completed') {
    //   this.done = this.tasks.filter((t) => t.isDone === true);
    // } else if (filter === 'all') {
    //   this.tasks;
    // }
    // return [];
  }
}
