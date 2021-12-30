import { Component, Input, OnInit } from '@angular/core';
import { PropertiesOffer } from 'src/app/config/interfaces/properties-offer';

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
    { value: 'premises', viewValue: 'Lokale' },
    { value: 'plots', viewValue: 'Działki' },
    { value: 'houses', viewValue: 'Domy' },
    { value: 'apartments', viewValue: 'Mieszkania' }
  ];
  arrayType: PropertiesOffer[] = [
    { value: 'rent', viewValue: 'Wynajem'},
    { value: 'sell', viewValue: 'Kupno'}
  ];

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
