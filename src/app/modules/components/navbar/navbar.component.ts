import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  faBars = faBars;
  logoPath = './../../../../assets/images/navbar/logo.webp';
  values = {
    plot: 'Działki',
    premises: 'Lokale',
    flats: 'Mieszkania',
    houses: 'Domy',
    contact: 'Kontakt'
  }
  photos = {
    plot: '../../../../assets/images/navbar/plots.webp',
    premises: '../../../../assets/images/navbar/premises.webp',
    flats: '../../../../assets/images/navbar/flats.webp',
    houses: '../../../../assets/images/navbar/houses.webp',
    contact: '../../../../assets/images/navbar/contact.webp',
  }

  constructor(
    private router: Router
  ) { }

  scrollToTop() {
    if (this.router.url == '/' || this.router.url == "/#Kontakt") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else {
      location.href = '';
    }
  }

  scrollToContact() {
    if(this.router.url == '/' || this.router.url == "/#Kontakt") {
      let yOffset = 200;
      const el = document.getElementById('Kontakt');
      const target = el!.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
    else {
      window.location.href = "#Kontakt";
    }
  }

  ngOnInit(): void {

  }


}
