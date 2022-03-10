import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.scss'],
})

export class TittleComponent implements OnInit {
  @Input() name = '';

  constructor() {}

  ngOnInit(): void {}
}
