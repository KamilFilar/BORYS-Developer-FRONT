import { Component, OnInit } from '@angular/core';
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
  btnName = "Akceptuj";

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    $(window).on('load', function () {
      ($('#cookiesModal') as any).modal('show');
    });
  }

  acceptCookies() {
    this.cookieService.set('acceptedCookies', 'yes', 2147483647);
  }

}
