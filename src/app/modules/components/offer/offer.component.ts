import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  @Input() offerID = '';
  @Input() offerImagePath = '';
  @Input() offerTitle = '';
  @Input() offerCategory = '';
  @Input() offerType = '';
  @Input() offerCity = '';
  @Input() offerStreet = '';
  @Input() offerArea = '';
  @Input() offerRooms = '';
  @Input() offerPrice = '';

  constructor(
    private router: Router
  ) {}

  firstLetterUp(item: string) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }

  goToDetails(category: any) {
    if (category == 'Lokal') this.router.navigate(['../Lokale/', this.offerID]);
    if (category == 'Dom') this.router.navigate(['Domy/', this.offerID]);
    if (category == 'Mieszkanie') this.router.navigate(['Mieszkania/', this.offerID]);
    if (category == 'Działka') this.router.navigate(['Działki/', this.offerID]);
    return;
  }

  calcPriceArea() {
    let price = this.offerPrice.replace(/\s/g, '');
    return (parseFloat(price) / parseFloat(this.offerArea)).toFixed(2);
  }

  isPlot() {
    return this.offerCategory == 'Działka' ? true : false;
  }

  ngOnInit(): void {
    this.offerCategory = this.firstLetterUp(this.offerCategory);
  }
}
