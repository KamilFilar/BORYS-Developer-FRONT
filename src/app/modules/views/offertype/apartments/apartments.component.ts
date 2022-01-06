import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/config/services/offer.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: [
    './../../../../../assets/styles/offers.scss'  
  ]
})
export class ApartmentsComponent implements OnInit {

  tittleText = 'Mieszkania';
  offerObject: any;
  offerObjectLength: any;

  constructor(
    private offerService: OfferService,
  ) { }

  getApartments() {
    this.offerService.getTypeOffers('mieszkanie')?.then(
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
    this.getApartments();
    this.isOfferExist();
  }

}
