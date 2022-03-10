import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InfoService {

  private baseURL = 'https://borysnieruchomosci.pl/adminBorys/api/informacja';

  constructor(
    private https: HttpClient
  ) { }

  getInfo () {
      return this.https.get(this.baseURL).toPromise();
  }
}
