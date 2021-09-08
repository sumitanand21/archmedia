import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.action';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage),
      concatMap((action) =>
        this.globalService.login(action.username, action.password).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap((action) => {
          const tempState: any = action.user;
          this.route.navigate(['/home']);
          sessionStorage.setItem('user', JSON.stringify(tempState));
          this.globalService.showToastrSuccess('Success', 'Logged In successfully');
        }
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap(() => {
          this.globalService.showToastrInfo('Login Information',
            'Try using:<br/> username: admin<br/> password: admin');
          this.globalService.showToastrError('LogIn Error',
            'User Id or password is wrong ');

        })
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          sessionStorage.clear();
          this.globalService.showToastrSuccess('Success', 'You are logged out');
        })
      ),
    { dispatch: false }
  );


  constructor(private actions$: Actions,
              private globalService: GlobalService,
              private route: Router) { }
}
