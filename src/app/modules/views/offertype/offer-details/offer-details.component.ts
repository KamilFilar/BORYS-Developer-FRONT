import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/config/services/offer.service';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faCompress } from '@fortawesome/free-solid-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})

export class OfferDetailsComponent implements OnInit {

  offerDetailsObj: any;
  singleOffer: any;

  category = {
    icon: faStoreAlt,
    name: 'Rodzaj'
  }
  type = {
    icon: faCoins,
    name: 'Typ'
  }
  area = {
    icon: faCompress,
    name: 'Powierzchnia' 
  }
  rooms = {
    icon: faBorderAll,
    name: 'Liczba pokoi'
  }
  city = {
    icon: faCity,
    name: 'Miasto'
  }
  street = {
    icon: faRoad,
    name: 'Ulica'
  }
  commune = {
    icon: faMapMarkedAlt,
    name: 'Gmina'
  }
  voivodeship = {
    icon: faCompass,
    name: 'Województwo'
  }

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) { }

  getOfferDetails() {
    let offerID = this.route.snapshot.paramMap.get('id');

    this.offerService.getAllOffers().then(
      (res) => {
        this.offerDetailsObj = res;

        for (let i = 0; i < this.offerDetailsObj.length; i++) {

          if (this.offerDetailsObj[i].ogloszenieId == offerID) {
            this.singleOffer = this.offerDetailsObj[i];
            break;
          }
        }
      }
    )
  }

  formatDate(date: Date) {
    let d = new Date(date);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  }

  ngOnInit(): void {
    this.getOfferDetails();
  }

}
