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
import { HomeOfferComponent } from './modules/views/home/home-offer/home-offer.component';
import { HomeAboutUsComponent } from './modules/views/home/home-about-us/home-about-us.component';

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
    HomeOfferComponent,
    HomeAboutUsComponent,
    // Components
    NavbarComponent,
    NavbarItemComponent,
    FooterComponent,
    HeroButtonComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // API
    HttpClientModule
  ],
  providers: [
    // Services
    OfferService,
    ContactService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
