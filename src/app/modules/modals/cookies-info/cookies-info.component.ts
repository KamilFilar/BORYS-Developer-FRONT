import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cookies-info',
  templateUrl: './cookies-info.component.html',
  styleUrls: ['./cookies-info.component.scss']
})
export class CookiesInfoComponent implements OnInit {

  faTimesCircle = faTimesCircle; 
  unaccept = 'https://www.google.pl/';

  constructor(
    private cookieService: CookieService
  ) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isAcceptCookies() {
    this.cookieService.set('acceptedCookies', 'yes');
  }

}
