import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TodoListInterface {
  id: string;
  title: string;
  addedDate: string;
  order: number;
}
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  baseURL = 'https://social-network.samuraijs.com/api/1.1/';
  API_KEY = '7c107b4d-cd0a-4372-844b-6a20a61a6e27';
  constructor(private http: HttpClient) {}

  getTodoLists(): Observable<any> {
    return this.http.get(this.baseURL + 'todo-lists', {
      withCredentials: true,
    });
  }
}
