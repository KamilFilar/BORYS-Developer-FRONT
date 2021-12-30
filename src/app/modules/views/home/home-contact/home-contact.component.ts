import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: [
    './home-contact.component.scss',
    '../../../../../assets/styles/material.scss'
  ]
})
export class HomeContactComponent implements OnInit {

  contactText = 'Kontakt';
  sendBtnText = 'Wyślij';

  constructor() { }

  ngOnInit(): void {
  }

}
