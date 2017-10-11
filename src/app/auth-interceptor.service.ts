import { Injectable } from '@angular/core';
import { HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpInterceptor, HttpRequest, HttpProgressEvent, HttpUserEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  authReq: HttpRequest<any>;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    //https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
    
    localStorage.AUTH_TOKEN = '1234';
    console.log('localStorage.AUTH_TOKEN : ' + localStorage.AUTH_TOKEN);
    if(localStorage.AUTH_TOKEN){ 
       this.authReq = req.clone({
          headers: req.headers.set('Authorization','token ' + localStorage.AUTH_TOKEN)
      });
    }else{
     this.authReq = req.clone();
    }
    return next.handle(this.authReq);
  }

  constructor() { }

}
