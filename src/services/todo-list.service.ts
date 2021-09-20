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

  //TodoList Methods

  getTodoLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.baseURL + '/todo-lists', {
      withCredentials: true,
      headers: {
        'API-KEY': '7c107b4d-cd0a-4372-844b-6a20a61a6e27',
      },
    });
  }
  deleteTodoList(todoID: string): Observable<any> {
    return this.http.delete<any>(this.baseURL + `/todo-lists/${todoID}`, {
      withCredentials: true,
      headers: {
        'API-KEY': '7c107b4d-cd0a-4372-844b-6a20a61a6e27',
      },
    });
  }

  createTodoList(title: string): Observable<any> {
    return this.http.post<any>(
      this.baseURL + `/todo-lists`,
      { title: title },
      {
        withCredentials: true,
        headers: {
          'API-KEY': '7c107b4d-cd0a-4372-844b-6a20a61a6e27',
        },
      }
    );
  }

  //*Tasks Methods

  getTasks(id: string): Observable<TasksResponse> {
    return this.http.get<TasksResponse>(
      this.baseURL + `/todo-lists/${id}/tasks`,
      {
        withCredentials: true,
        headers: {
          'API-KEY': '7c107b4d-cd0a-4372-844b-6a20a61a6e27',
        },
      }
    );
  }

  deleteTask(todoID: string, taskID: string): Observable<TasksResponse> {
    return this.http.delete<TasksResponse>(
      this.baseURL + `/todo-lists/${todoID}/tasks/${taskID}`,
      {
        withCredentials: true,
        headers: {
          'API-KEY': '7c107b4d-cd0a-4372-844b-6a20a61a6e27',
        },
      }
    );
  }

  addTask(todoID: string, taskTitle: string): Observable<TasksResponse> {
    return this.http.post<TasksResponse>(
      this.baseURL + `/todo-lists/${todoID}/tasks`,
      { title: taskTitle },
      {
        withCredentials: true,
        headers: {
          'API-KEY': '7c107b4d-cd0a-4372-844b-6a20a61a6e27',
        },
      }
    );
  }
}
