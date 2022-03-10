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
  styleUrls: ['./offer-details.component.scss'],
})

export class OfferDetailsComponent implements OnInit {
  singleOffer: any;

  category = {
    icon: faStoreAlt,
    name: 'Rodzaj',
  };
  type = {
    icon: faCoins,
    name: 'Typ',
  };
  area = {
    icon: faCompress,
    name: 'Powierzchnia',
  };
  rooms = {
    icon: faBorderAll,
    name: 'Liczba pokoi',
  };
  city = {
    icon: faCity,
    name: 'Miasto',
  };
  street = {
    icon: faRoad,
    name: 'Ulica',
  };
  commune = {
    icon: faMapMarkedAlt,
    name: 'Gmina',
  };
  voivodeship = {
    icon: faCompass,
    name: 'Województwo',
  };

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ) {}

  getOfferDetails() {
    let offerID = this.route.snapshot.paramMap.get('id')!;

    this.offerService.getSingleOffer(offerID).then((res) => {
      this.singleOffer = res;
    });
  }

  setRooms() {
    if (this.singleOffer.rodzaj == 'działka') return '-----';

    return this.singleOffer.liczba_pokoi;
  }

  setPriceUnit() {
    if (this.singleOffer.typ == 'wynajem') return 'PLN/miesiąc';

    return 'PLN';
  }

  splitPrice(price: any) {
    return price.toLocaleString();
  }

  formatDate(date: Date) {
    let d = new Date(date);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  }

  ngOnInit(): void {
    this.getOfferDetails();
  }
}
