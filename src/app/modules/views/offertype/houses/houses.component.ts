import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/config/services/offer.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: [
    './../../../../../assets/styles/offers.scss'
  ]
})
export class HousesComponent implements OnInit {

  tittleText = 'Domy';
  offerObject: any;
  offerObjectLength: any;

  constructor(
    private offerService: OfferService,
  ) { }

  getHouses() {
    this.offerService.getTypeOffers('dom')?.then(
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
    this.getHouses();
    this.isOfferExist();
  }

}
