import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() offerImagePath = '';
  @Input() offerTitle = '';
  @Input() offerCategory = '';
  @Input() offerType = '';
  @Input() offerCity = '';
  @Input() offerStreet = '';
  @Input() offerArea = '';
  @Input() offerRooms = '';
  @Input() offerPrice = '';

  constructor() { }

  calcPriceArea() {
    let price = this.offerPrice.replace(/\s/g, '');
    return (parseFloat(price)/parseFloat(this.offerArea)).toFixed(2);
  }
  
  isPlot() {
    if(this.offerCategory == 'działka')
      return true;

    return false;
  }

  ngOnInit(): void {
  }

}
