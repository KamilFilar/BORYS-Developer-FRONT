import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {

  @Input() value = '';
  @Input() navItemPhoto = '';

  constructor() { }

  ngOnInit(): void {
  }

}
