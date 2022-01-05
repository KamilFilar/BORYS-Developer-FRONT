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

  scrollToContent() {
    let yOffset = 200;
    const el = document.getElementById('Promowane');
    const target = el!.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  ngOnInit(): void {
  }

}
