import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// Import components
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { HeroButtonComponent } from './modules/components/hero-button/hero-button.component';

// Import views
// Home
import { HomeComponent } from './modules/views/home/home.component';
import { HomeWelcomeComponent } from './modules/views/home/home-welcome/home-welcome.component';
import { HomeOfferComponent } from './modules/views/home/home-offer/home-offer.component';
import { HomeAboutUsComponent } from './modules/views/home/home-about-us/home-about-us.component';
import { NavbarItemComponent } from './modules/components/navbar/navbar-item/navbar-item.component';


@NgModule({
  declarations: [
    AppComponent,
    // Views
    HomeComponent,
    HomeWelcomeComponent,
    HomeOfferComponent,
    HomeAboutUsComponent,
    // Components
    NavbarComponent,
    FooterComponent,
    HeroButtonComponent,
    NavbarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
