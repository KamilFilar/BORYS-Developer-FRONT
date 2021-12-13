import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private baseURL = 'https://borysnieruchomosci.pl/adminBorys/api';

  constructor(
    private https: HttpClient
  ) { }

  sendEmail(email: string, name: string, lastName: string, phone: number, subject: string, content: string) 
  {  
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    const body = JSON.stringify({
      email: email,
      subject: subject,
      content: content,
      firstName: name,
      lastName: lastName,
      phoneNumber: phone
    })

    return this.https.post<Email>(this.baseURL + '/email', body, {headers: headers}).toPromise();
  }

}
