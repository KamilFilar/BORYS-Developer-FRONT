import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import main components
import { PageNotFoundComponent } from './modules/views/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/views/home/home.component';
// Import subpages
import { ApartmentsComponent } from './modules/views/offertype/apartments/apartments.component';
import { HousesComponent } from './modules/views/offertype/houses/houses.component';
import { PlotsComponent } from './modules/views/offertype/plots/plots.component';
import { PremisesComponent } from './modules/views/offertype/premises/premises.component';
import { CookiesInfoComponent } from './modules/views/cookies-info/cookies-info.component';
import { SearchOfferResultComponent } from './modules/views/offertype/search-offer-result/search-offer-result.component';
import { OfferDetailsComponent } from './modules/views/offertype/offer-details/offer-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Mieszkania', component: ApartmentsComponent},
  { path: 'Mieszkania/:id', component: OfferDetailsComponent, pathMatch: 'full' }, // Don't work as children
  { path: 'Domy', component: HousesComponent },
  { path: 'Domy/:id', component: OfferDetailsComponent, pathMatch: 'full' }, // Don't work as children
  { path: 'Działki', component: PlotsComponent },
  { path: 'Działki/:id', component: OfferDetailsComponent, pathMatch: 'full' }, // Don't work as children
  { path: 'Lokale', component: PremisesComponent },
  { path: 'Lokale/:id', component: OfferDetailsComponent, pathMatch: 'full' }, // Don't work as children
  { path: 'Wyszukane', component: SearchOfferResultComponent },
  { path: 'Cookies', component: CookiesInfoComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
