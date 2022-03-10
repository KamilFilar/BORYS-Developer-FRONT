import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cookies-info',
  templateUrl: './cookies-info.component.html',
  styleUrls: ['./cookies-info.component.scss'],
})

export class CookiesInfoComponent implements OnInit {
  unaccept = 'https://www.google.pl/';
  btnName = 'Akceptuj';

  constructor(
    private cookieService: CookieService,
    private renderer: Renderer2
  ) {}

  acceptCookies() {
    this.cookieService.set('acceptedCookies', 'yes', 2147483647);
    this.renderer.addClass(
      document.getElementById('cookiesInfo'),
      'hideCookiesInfo'
    );
  }

  ngOnInit(): void {}
}
