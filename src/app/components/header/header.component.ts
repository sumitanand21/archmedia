import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { User } from 'src/app/models/auth';
// import * as fromAuthSelectors from 'src/app/store/selectors/auth';
import * as fromAuthActions from 'src/app/store/actions/auth.action';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('userDetMenuTrigger', { static: false }) trigger: MatMenuTrigger;
  @ViewChild('routeDetMenuTrigger', { static: false }) routetrigger: MatMenuTrigger;
  // user: Observable<fromAuthSelectors.selectAuthLinksViewModel>;
  user: User;
  currentDate = new Date().toLocaleString('en-US', { timeZone: 'GMT' });
  @Output() emitOut = new EventEmitter<any>();
  constructor(private router: Router, private store: Store<AppState>) {
    setInterval(() => {
      this.currentDate = new Date().toLocaleString('en-US', { timeZone: 'GMT' });
    }, 1);
  }

  ngOnInit(): void {
    const observer = {
      next: (user) => {
        this.user = user;

      },
      error: (err) => console.log(err),
    };

    this.store.select(state => state.auth.user).subscribe(observer);
  //  this.store.pipe(select(fromAuthSelectors.selectAuthLinksViewModel));

  }

  closeUesrMenu() {
    this.trigger.closeMenu();
  }

  getFirstChar(strVal) {
    if (strVal) {
      const tempStr = strVal.trim();
      return tempStr ? tempStr.charAt(0) : '';
    } else {
      return '';
    }
  }

  login(){
    this.router.navigate(['/login']);
  }


  logOut() {
    this.closeUesrMenu();
    this.router.navigate(['/home']);
    this.store.dispatch(
      fromAuthActions.logout()
    );
  }


}
