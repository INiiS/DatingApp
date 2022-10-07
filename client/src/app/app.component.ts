import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TimeagoIntl } from 'ngx-timeago';
import { User } from './models/user';
import { AccountService } from './services/account.service';
import { strings as stringsFr } from 'ngx-timeago/language-strings/fr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private accountService: AccountService, intl: TimeagoIntl) {
    intl.strings = stringsFr;
    intl.changes.next();
  }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user')); 
    this.accountService.setCurrentUser(user);
  }
}
