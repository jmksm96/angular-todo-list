import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/interface/todolist';
import { TasksResponse } from './../app/interface/tasks';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  baseURL = 'https://social-network.samuraijs.com/api/1.1';
  API_KEY = '7c107b4d-cd0a-4372-844b-6a20a61a6e27';
  constructor(private http: HttpClient) {}

  getTodoLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.baseURL + '/todo-lists', {
      withCredentials: true,
    });
  }

  getTasks(id: string): Observable<TasksResponse> {
    return this.http.get<TasksResponse>(
      this.baseURL + `/todo-lists/${id}/tasks`,
      {
        withCredentials: true,
      }
    );
  }
}
