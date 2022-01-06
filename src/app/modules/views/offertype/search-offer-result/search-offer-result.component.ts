import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/config/services/offer.service';

@Component({
  selector: 'app-search-offer-result',
  templateUrl: './search-offer-result.component.html',
  styleUrls: ['./../../../../../assets/styles/offers.scss']
})
export class SearchOfferResultComponent implements OnInit {

  tittleText = 'Szczegóły wyszukiwania';
  offerObject: any;
  offerObjectLength: any;
  areaMin: any;
  areaMax: any;
  areaOk!: boolean;
  returBtn = 'Powrót';

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) { }

  getOffers() {
    this.offerService.getParamsOffers(
      this.route.snapshot.paramMap.get('name'),
      this.route.snapshot.paramMap.get('type'),
      this.route.snapshot.paramMap.get('category'),
      this.route.snapshot.paramMap.get('location')
    ).then(
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

  isCorrectArea(offerArea: number) {
    this.areaMax = this.route.snapshot.paramMap.get('max');
    this.areaMin = this.route.snapshot.paramMap.get('min');

    if(!this.areaMax)
      this.areaMax = 1000000;
      
    if(!this.areaMin)
      this.areaMin = 0;

    if(offerArea >= this.areaMin && offerArea <= this.areaMax)
      return true;
      
    return false;
  }

  ngOnInit(): void {
    this.getOffers();
    this.isOfferExist();
    window.scrollTo(0, 0)
  }

}
