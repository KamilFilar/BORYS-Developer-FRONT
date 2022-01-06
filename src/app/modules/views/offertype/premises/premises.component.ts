import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/config/services/offer.service';

@Component({
  selector: 'app-premises',
  templateUrl: './premises.component.html',
  styleUrls: [
    './../../../../../assets/styles/offers.scss'  
  ]
})

export class PremisesComponent implements OnInit {

  tittleText = 'Lokale';
  offerObject: any;
  offerObjectLength: any;

  constructor(
    private offerService: OfferService,
  ) { }

  getPremises() {
    this.offerService.getTypeOffers('lokal')?.then(
      (res) => {
        this.offerObject = res;
        this.offerObjectLength = this.offerObject.length;
        console.log(this.offerObject[0].images[0].image_path)
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
    this.getPremises();
    this.isOfferExist();
  }

}
