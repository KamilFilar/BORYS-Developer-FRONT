import { Component, Input, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() tittle = '';
  @Input() msg = '';

  faTimesCircle = faTimesCircle; 

  constructor() { }

  ngOnInit(): void {
  }

}
