import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from 'src/app/interface/todolist';
import { TasksResponse } from './../app/interface/tasks';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private http: HttpClient) {}

  isAuthorized: boolean = !!localStorage.getItem('accessToken') || false;
  //TodoList Methods

  getTodoLists(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>('/todo-lists', {
      withCredentials: true,
    });
  }
  deleteTodoList(todoID: string): Observable<any> {
    return this.http.delete<any>(`/todo-lists/${todoID}`, {
      withCredentials: true,
    });
  }

  createTodoList(title: string): Observable<any> {
    return this.http.post<any>(
      `/todo-lists`,
      { title: title },
      {
        withCredentials: true,
      }
    );
  }
  updateTodoList(todolistId: string, title: string): Observable<any> {
    return this.http.put(
      `/todo-lists/${todolistId}`,
      { title },
      {
        withCredentials: true,
      }
    );
  }
  //*Tasks Methods

  getTasks(id: string): Observable<TasksResponse> {
    return this.http.get<TasksResponse>(`/todo-lists/${id}/tasks`, {
      withCredentials: true,
    });
  }

  deleteTask(todoID: string, taskID: string): Observable<TasksResponse> {
    return this.http.delete<TasksResponse>(
      `/todo-lists/${todoID}/tasks/${taskID}`,
      {
        withCredentials: true,
      }
    );
  }

  addTask(todoID: string, taskTitle: string): Observable<TasksResponse> {
    return this.http.post<TasksResponse>(
      `/todo-lists/${todoID}/tasks`,
      { title: taskTitle },
      {
        withCredentials: true,
      }
    );
  }
}
