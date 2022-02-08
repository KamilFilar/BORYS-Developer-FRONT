import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private cookieService: CookieService
  ) { }

  checkCookies() {
    if (this.cookieService.get('acceptedCookies') === 'yes') {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    this.checkCookies();
  }
}
