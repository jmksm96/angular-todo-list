import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: Params) {
    return this.http.post('/auth/login', data);
  }

  logout() {
    return this.http.delete('/auth/login');
  }
}
