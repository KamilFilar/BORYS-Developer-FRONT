import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-offers',
  templateUrl: './no-offers.component.html',
  styleUrls: ['./no-offers.component.scss'],
})

export class NoOffersComponent implements OnInit {
  emojiPath = './../../../../assets/images/emoji/suprise.svg';

  constructor() {}

  ngOnInit(): void {}
}
