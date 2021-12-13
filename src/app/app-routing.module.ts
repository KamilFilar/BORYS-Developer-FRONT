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
import { PrivacyPolicyComponent } from './modules/views/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Mieszkania', component: ApartmentsComponent },
  { path: 'Domy', component: HousesComponent },
  { path: 'Działki', component: PlotsComponent },
  { path: 'Lokale', component: PremisesComponent },
  { path: 'Polityka prywatności', component: PrivacyPolicyComponent },
  { path: 'Cookies', component: CookiesInfoComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
