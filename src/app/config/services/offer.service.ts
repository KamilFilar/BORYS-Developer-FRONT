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
  
  getParamsOffers(name: any, type: any, category: any, location: any)
  {
    return this.https.get(this.baseURL + '/all?tytul='+name+'&typ='+category+'&rodzaj='+type+'&miasto='+location).toPromise();
  }

}
