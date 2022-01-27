import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (localStorage.getItem("token") != null) {
      request = request.clone({
        headers: request.headers.set(
          "Authorization",
          "Bearer " + localStorage.getItem("token")
        ),
      });
    }

    return next.handle(request);
  }
}
