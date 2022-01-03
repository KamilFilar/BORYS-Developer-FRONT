import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Import API
import { HttpClientModule } from '@angular/common/http';
import { OfferService } from './config/services/offer.service';
import { ContactService } from './config/services/contact.service';
// Import components
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { NavbarItemComponent } from './modules/components/navbar/navbar-item/navbar-item.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { HeroButtonComponent } from './modules/components/hero-button/hero-button.component';
import { OfferComponent } from './modules/components/offer/offer.component';
import { ButtonComponent } from './modules/components/button/button.component';
// Import views
import { PageNotFoundComponent } from './modules/views/page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './modules/views/privacy-policy/privacy-policy.component';
import { CookiesInfoComponent } from './modules/views/cookies-info/cookies-info.component';
import { PremisesComponent } from './modules/views/offertype/premises/premises.component';
import { HousesComponent } from './modules/views/offertype/houses/houses.component';
import { ApartmentsComponent } from './modules/views/offertype/apartments/apartments.component';
import { PlotsComponent } from './modules/views/offertype/plots/plots.component';
// Home
import { HomeComponent } from './modules/views/home/home.component';
import { HomeWelcomeComponent } from './modules/views/home/home-welcome/home-welcome.component';
import { HomeSearchOfferComponent } from './modules/views/home/home-search-offer/home-search-offer.component';
import { HomeOfferComponent } from './modules/views/home/home-offer/home-offer.component';
import { HomeAboutUsComponent } from './modules/views/home/home-about-us/home-about-us.component';
import { HomeContactComponent } from './modules/views/home/home-contact/home-contact.component';
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TittleComponent } from './modules/components/tittle/tittle.component';
import { NoOffersComponent } from './modules/components/no-offers/no-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    // Views
    PageNotFoundComponent,
    PrivacyPolicyComponent,
    CookiesInfoComponent,
    PremisesComponent,
    HousesComponent,
    ApartmentsComponent,
    PlotsComponent,
    // Home
    HomeComponent,
    HomeWelcomeComponent,
    HomeSearchOfferComponent,
    HomeOfferComponent,
    HomeAboutUsComponent,
    HomeContactComponent,
    // Components
    NavbarComponent,
    NavbarItemComponent,
    FooterComponent,
    HeroButtonComponent,
    OfferComponent,
    ButtonComponent,
    TittleComponent,
    NoOffersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // API
    HttpClientModule,
    // Angular Material
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    // Services
    OfferService,
    ContactService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
