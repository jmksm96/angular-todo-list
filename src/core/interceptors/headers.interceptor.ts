import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListService } from 'src/services/todo-list.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor(private todoService: TodoListService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = req.headers;
    headers = headers.set('API-KEY', '7c107b4d-cd0a-4372-844b-6a20a61a6e27');
    // if (this.todoService.isAuthorized) {
    //   headers = headers.set(
    //     'Authorization',
    //     'Bearer ' + localStorage.getItem('accessToken') || ''
    //   );
    // }
    const cloneReq = req.clone({ headers });
    return next.handle(cloneReq);
  }
}
