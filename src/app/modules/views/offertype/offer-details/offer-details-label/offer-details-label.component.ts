import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-offer-details-label',
  templateUrl: './offer-details-label.component.html',
  styleUrls: ['./offer-details-label.component.scss']
})
export class OfferDetailsLabelComponent implements OnInit {

  @Input() icon!: IconProp;
  @Input() name = '';
  @Input() value = '';

  constructor() { }

  isArea(val: any) {
    if(val == 'Powierzchnia')
      return true;

    return false;
  }

  ngOnInit(): void {
  }

}
