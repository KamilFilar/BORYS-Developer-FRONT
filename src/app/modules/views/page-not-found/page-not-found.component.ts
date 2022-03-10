import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})

export class PageNotFoundComponent implements OnInit {
  btnText = 'Powrót';
  treePath = './../../../../assets/icons/treeicon.svg';

  constructor() {}

  ngOnInit(): void {}
}
