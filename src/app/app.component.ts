import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  
  constructor(private cookieService: CookieService) {}

  checkCookies() {
    return this.cookieService.get('acceptedCookies') == 'yes' ? false : true;
  }

  ngOnInit(): void {
    this.checkCookies();
  }
}
