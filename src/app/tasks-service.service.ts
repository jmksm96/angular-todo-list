import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  constructor(private http: HttpClientModule) {}
}
