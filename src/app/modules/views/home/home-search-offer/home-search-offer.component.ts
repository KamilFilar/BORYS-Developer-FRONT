import { Component, OnInit } from '@angular/core';
import { PropertiesOffer } from 'src/app/config/interfaces/properties-offer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search-offer',
  templateUrl: './home-search-offer.component.html',
  styleUrls: [
    './home-search-offer.component.scss',
    '../../../../../assets/styles/material.scss'
  ]
})

export class HomeSearchOfferComponent implements OnInit {

  searchOffer = 'Znajdź nieruchomość dopasowaną do siebie';
  searchText = 'Wyszukaj';
  arrayOffer: PropertiesOffer[] = [
    { value: 'lokal', viewValue: 'Lokale' },
    { value: 'działka', viewValue: 'Działki' },
    { value: 'dom', viewValue: 'Domy' },
    { value: 'mieszkanie', viewValue: 'Mieszkania' }
  ];
  arrayType: PropertiesOffer[] = [
    { value: 'wynajem', viewValue: 'Wynajem' },
    { value: 'sprzedaż', viewValue: 'Kupno' }
  ];

  offerType = '';
  offerCategory = '';

  constructor(
    private router: Router
  ) { }

  sendData() {
    let offerName = document.getElementsByTagName("input")[0].value;
    let offerLocation = document.getElementsByTagName("input")[1].value;
    let minArea = document.getElementsByTagName("input")[2].value;
    let maxArea = document.getElementsByTagName("input")[3].value;

    this.router.navigate(['Wyszukane', 
      { 
        name: offerName,
        type: this.offerType,
        category: this.offerCategory,
        location: offerLocation,
        min: minArea,
        max: maxArea
      }
    ])
  }

  changeTypeOffer(value: any) {
    return this.offerType = value;
  }

  changeCategoryOffer(value: any) {
    return this.offerCategory = value;
  }

  ngOnInit(): void {

  }

}
