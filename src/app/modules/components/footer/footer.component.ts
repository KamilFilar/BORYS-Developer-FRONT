import { Component, OnInit } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    './../../../../assets/styles/offers.scss'
  ]
})
export class FooterComponent implements OnInit {

  faMobileAlt = faMobileAlt;
  faMailBulk = faMailBulk;
  faMapMarkedAlt = faMapMarkedAlt;
  faCalendarCheck = faCalendarCheck;
  logoIMG = './../../../../assets/images/footer/logo.webp';

  actualYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
