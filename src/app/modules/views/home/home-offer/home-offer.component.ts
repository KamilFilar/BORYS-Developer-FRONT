import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-offer',
  templateUrl: './home-offer.component.html',
  styleUrls: ['./home-offer.component.scss']
})
export class HomeOfferComponent implements OnInit {

  promotedText = 'Promowane oferty';

  constructor() { }

  ngOnInit(): void {
  }

}
