import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OfferService {

  private baseURL = 'https://borysnieruchomosci.pl/adminBorys/api';

  constructor(
    private https: HttpClient
  ) { }

  getAllOffers() 
  {
    return this.https.get(this.baseURL + '/all').toPromise();
  }

  // Method to get offer by type
  getTypeOffers(typeOfOffer: string) 
  {
    if (typeOfOffer == '')
      return;

    return this.https.get(this.baseURL + '/' + typeOfOffer).toPromise();
  }
  
  // Method to filtr special params
  getParamsOffers()
  {
    // To do later
    // 1. Redirect to to subpage by type (onclick in filtrbox)
    // 2. Get list only offer == params
  }

}
