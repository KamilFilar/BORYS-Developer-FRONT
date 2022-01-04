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

  getTypeOffers(typeOfOffer: string) 
  {
    if (typeOfOffer == '')
      return;

    return this.https.get(this.baseURL + '/all?rodzaj=' + typeOfOffer).toPromise();
  }
  
  getParamsOffers()
  {
    // To do later
    // 1. Redirect to to subpage by type (onclick in filtrbox)
    // 2. Get list only offer == params
  }

}
