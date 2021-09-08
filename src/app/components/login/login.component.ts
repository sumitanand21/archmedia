import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/auth';
import * as fromAuthActions from 'src/app/store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailRegex: any = new RegExp(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, 'g');
  username: any = '';
  userPassword: any = '';
  submitted = false;
  // invalidEmail = false;
  constructor(private router: Router,
              private globalService: GlobalService,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.globalService.showToastrInfo('Login Information',
    'Use:<br/> username: admin<br/> password: admin');
    sessionStorage.removeItem('Token');
  }

  // tslint:disable-next-line:typedef
  navigateToDash() {
    // this.router.navigate(['/oppview/dashboard']);
  }
  // tslint:disable-next-line:typedef
  checklogIn() {
    if (!this.userPassword || !this.username) {
      this.submitted = true;
    } else if (!this.userPassword.trim() || !this.username.trim()) {
      this.submitted = true;
    } else {
      this.submitted = false;
      this.onSubmit();
    }

  }

  onSubmit() {
    this.store.dispatch(
      fromAuthActions.loginPage({
        username: this.username,
        password: this.userPassword,
      })
    );
  }


}
