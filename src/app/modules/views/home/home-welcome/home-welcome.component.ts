import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss']
})

export class HomeWelcomeComponent implements OnInit {

  imgWelcomePath = './../../../../../assets/images/home/welcome.jpg';
  btnName = 'Zobacz ofertę'

  constructor() { }

  ngOnInit(): void {
  }

}
