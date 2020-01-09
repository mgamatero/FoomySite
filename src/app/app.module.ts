import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { HowItWorksComponent } from './components/landing-page/how-it-works/how-it-works.component';
import { FoomiesNearYouComponent } from './components/landing-page/foomies-near-you/foomies-near-you.component';
import { FeedbackComponent } from './components/landing-page/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
// import { InitialLoginComponent } from './components/login/initial-login/initial-login.component';
import { PlainHeaderComponent } from './components/plain-header/plain-header.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuHeaderComponent,
    HowItWorksComponent,
    FoomiesNearYouComponent,
    FeedbackComponent,
    FooterComponent,
    LoginComponent,
    // InitialLoginComponent,
    PlainHeaderComponent,
    AppRoutingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
