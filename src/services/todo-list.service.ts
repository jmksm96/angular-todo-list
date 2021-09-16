import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  baseURL = 'https://social-network.samuraijs.com/api/1.1/';

  constructor(private http: HttpClient) {

  }
}
