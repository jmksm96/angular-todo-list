import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoList } from 'src/app/interface/todolist';
import * as uuid from 'uuid';
import { TodoListService } from './../../../../../services/todo-list.service';
import { Tasks, TaskStatuses } from './../../../../interface/tasks';
type Filters = 'all' | 'active' | 'completed';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TodoListItemComponent implements OnInit {
  @Input() id!: string;
  @Input() title!: string;

  form!: FormGroup;
  todolists: TodoList[] = [];
  filters: Filters = 'all';
  task!: Tasks[];
  filteredTasks!: Tasks[];
  constructor(private fb: FormBuilder, private dataService: TodoListService) {}

  ngOnInit(): void {
    this.getTasks();
    this.form = this.fb.group({
      input: this.fb.control(''),
      title: this.fb.control(''),
      taskLabel: this.fb.control(this.task),
    });
  }
  getTasks() {
    this.dataService.getTasks(this.id).subscribe((res) => {
      this.task = res.items;
    });
  }

  updateTodoList(todoListID?: string) {
    // this.dataService
    //   .updateTodoList(todoListID, this.form.get('title')?.value)
    //   .subscribe(() => {});
    console.log(this.form.value);
  }

  addTask(todoId: string = '') {
    let newTask = {
      id: uuid.v4(),
      title: this.form.get('input')?.value,
      status: 0,
    };
    this.dataService.addTask(todoId, newTask.title).subscribe(() => {
      this.task.push(newTask);
      this.form.reset();
    });
  }

  deleteTask(todoId: string, id: string) {
    this.dataService.deleteTask(todoId, id).subscribe(() => {
      this.task = this.task.filter((task) => task.id != id);
    });
  }

  filterTasks(filter?: string) {
    if (filter === 'active') {
      this.task.filter((t) => t.status === TaskStatuses.New);
    }
    if (filter === 'completed') {
      this.task.filter((t) => t.status === TaskStatuses.Completed);
    }
  }
  deleteTodoList(todoID: string) {
    this.dataService.deleteTodoList(todoID).subscribe(() => {});
  }
}
