import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoList } from 'src/app/interface/todolist';
import { TodoListService } from 'src/services/todo-list.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TodoListsComponent implements OnInit {
  data!: TodoList[];
  form!: FormGroup;
  constructor(
    private todoListService: TodoListService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      input: this.fb.control(''),
    });
  }
  ngOnInit(): void {
    this.loadData();
  }

  addTodoList(title: string) {
    let newTodo = {
      id: v4(),
      title: title,
      addedDate: 'date',
      order: 1,
    };

    this.todoListService.createTodoList(title).subscribe(() => {
      this.data.push(newTodo);
      this.form.reset();
    });
  }

  loadData() {
    this.todoListService.getTodoLists().subscribe((res) => {
      this.data = res;
    });
  }
}
