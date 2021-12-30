import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-about-us',
  templateUrl: './home-about-us.component.html',
  styleUrls: ['./home-about-us.component.scss']
})

export class HomeAboutUsComponent implements OnInit {

  aboutUsText = 'O nas';
  wesolaIMG = './../../../../../assets/images/home/wesola.png';
  skowronkowIMG = './../../../../../assets/images/home/skowronkow.png';

  constructor() { }

  ngOnInit(): void {
  }

}
