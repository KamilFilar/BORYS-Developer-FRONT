import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
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
    private router: Router,
  ) { }

  firstLetterUp(item: string){
    return item.charAt(0).toUpperCase() + item.slice(1);
  }

  goToDetails(category: any) {
    if(category == 'lokal')
      this.router.navigate(['Lokale/', this.offerID]);
    if(category == 'dom')
      this.router.navigate(['Domy/', this.offerID]);
    if(category == 'mieszkanie')
      this.router.navigate(['Mieszkania/', this.offerID]);
    if(category == 'działka')
      this.router.navigate(['Działki/', this.offerID]);
    
    return;
  }

  calcPriceArea() {
    let price = this.offerPrice.replace(/\s/g, '');
    return (parseFloat(price)/parseFloat(this.offerArea)).toFixed(2);
  }
  
  isPlot() {
    if(this.offerCategory == 'działka')
      return true;

    return false;
  }

  ngOnInit(): void {
    this.offerCategory = this.firstLetterUp(this.offerCategory);
  }

}
