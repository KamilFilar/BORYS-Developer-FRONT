import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-offers',
  templateUrl: './no-offers.component.html',
  styleUrls: ['./no-offers.component.scss']
})
export class NoOffersComponent implements OnInit {

  emojiPath = './../../../../assets/images/emoji/suprise.svg' 
  // Public domain: https://publicdomainvectors.org/en/free-clipart/Surprised-fruit-emoji/48895.html

  constructor() { }

  ngOnInit(): void {
  }

}
