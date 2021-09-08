import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { startWith, map } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selecedUser = [];
  userDB = [{ username: 'Sam@arch', id: 1 },
  { username: 'Vik@arch', id: 2 },
  { username: 'John@arch', id: 3 },
  { username: 'Bob@arch', id: 4 }];

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  userCtrl = new FormControl();
  filtereduserDB: Observable<string[]>;

  @ViewChild('userInput') userInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filtereduserDB = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((user: string | null) => user ? this._filter(user) : this.userDB));
  }

  ngOnInit() {

  }

  emptyInput() {
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  remove(userObj: any, index): void {
    this.selecedUser.splice(index, 1);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selecedUser.push(event.option.value);
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private _filter(value: string): any[] {
    const filterValue = value && typeof value === 'string' ? value.toLowerCase() : '';
    if (filterValue) {
      return this.userDB.filter((userObj) => userObj.username.toLowerCase().includes(filterValue));
    } else {
      return this.userDB;
    }
  }

  disableOption(DDObj) {
    if (this.selecedUser.some(it => it.id === DDObj.id)) {
      return true;
    }
    return false;
  }

}
