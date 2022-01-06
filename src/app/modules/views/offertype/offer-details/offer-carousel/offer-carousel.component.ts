import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/config/services/offer.service';

@Component({
  selector: 'app-offer-carousel',
  templateUrl: './offer-carousel.component.html',
  styleUrls: ['./offer-carousel.component.scss']
})
export class OfferCarouselComponent implements OnInit {

  offerIMGObj: any;
  lengthOfImages: any;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) { }

  getOfferImages() {
    let offerID = this.route.snapshot.paramMap.get('id')!;

    this.offerService.getSingleOffer(offerID).then(
      (res) => {
        this.offerIMGObj = res;
        this.lengthOfImages = Object.keys(this.offerIMGObj.images).length;
      }
    )
  }

  counter(i: number) {
    return new Array(i);
  }

  getIMGFullScreen(image: any) {
    location.href = image;
  }

  ngOnInit(): void {
    this.getOfferImages(); 
  }

}
