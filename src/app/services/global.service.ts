import { Injectable } from '@angular/core';
import * as fromAuthModels from './../models/auth';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl = 'assets/staticresp/userDet.json';

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  // Fake Login API
  login(username: string, password: string): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      switchMap((users: any) => {
        const user = users.filter(it => it.username === username && it.password === password)[0];
        if (user) {
          delete user.password;
          return of(user);
        } else {
          return throwError('Unable to login');
        }
      })
    );
  }

  showToastrSuccess(headText, msg) {
    this.toastr.success(msg, headText, {
      timeOut: 2500,
      positionClass: 'toast-bottom-right',
    });
  }

  // Info
  showToastrInfo(headText, msg) {
    this.toastr.info(msg, headText, {
      timeOut: 10500,
      enableHtml: true,
      positionClass: 'toast-bottom-right',
    });
  }

  // Warning
  showToastrWarning(headText, msg) {
    this.toastr.warning(msg, headText, {
      timeOut: 2500,
      positionClass: 'toast-bottom-right',
    });
  }

  // Error
  showToastrError(headText, msg) {
    this.toastr.error(msg, headText, {
      timeOut: 2500,
      enableHtml: true,
      positionClass: 'toast-bottom-right',
    });
  }
}
