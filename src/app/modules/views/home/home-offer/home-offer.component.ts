import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/config/services/offer.service';

@Component({
  selector: 'app-home-offer',
  templateUrl: './home-offer.component.html',
  styleUrls: ['./home-offer.component.scss']
})

export class HomeOfferComponent implements OnInit {

  promotedText = 'Promowane oferty';
  offerObject: any;
  offerObjectlength: any;

  constructor(
    private offerService: OfferService
  ) { }

  // To fix in future
  getPromotedOffers() {
    this.offerService.getAllOffers().then(
      (res) => {
        this.offerObject = res;
        this.offerObjectlength = this.offerObject.length;
        console.log(this.offerObject);
        
      }
    );
  }

  counter() {
    if(this.offerObjectlength > 3)
      return new Array(3);
    
    return new Array(this.offerObjectlength);
  }

  isOfferExist() {
    if (this.offerObjectlength != 0)
      return true

    return false;
  }

  ngOnInit(): void {
    this.getPromotedOffers();
    this.isOfferExist();
  }

}
