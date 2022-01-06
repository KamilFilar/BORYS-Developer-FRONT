import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/config/services/offer.service';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: [
    './../../../../../assets/styles/offers.scss'  
  ]
})
export class PlotsComponent implements OnInit {

  tittleText = 'Działki';
  offerObject: any;
  offerObjectLength: any;
  returBtn = 'Powrót';

  constructor(
    private offerService: OfferService,
  ) { }

  getPlots() {
    this.offerService.getTypeOffers('działka')?.then(
      (res) => {
        this.offerObject = res;
        this.offerObjectLength = this.offerObject.length;
      }
    );
  }

  counter() {
    return new Array(this.offerObjectLength);
  }

  isOfferExist() {
    if (this.offerObjectLength != 0)
      return true

    return false;
  }

  splitPrice(price: any) {
    return price.toLocaleString();
  }

  ngOnInit(): void {
    this.getPlots();
    this.isOfferExist();
  }
}
