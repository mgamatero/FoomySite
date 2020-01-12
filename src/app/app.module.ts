import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { HowItWorksComponent } from './components/landing-page/how-it-works/how-it-works.component';
import { FoomiesNearYouComponent } from './components/landing-page/foomies-near-you/foomies-near-you.component';
import { FeedbackComponent } from './components/landing-page/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/landing-page/header/header.component';
import { PlainHeaderComponent } from './components/plain-header/plain-header.component';
import { NotFoundComponent} from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HrComponent } from './components/hr/hr.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent,
    HowItWorksComponent,
    FoomiesNearYouComponent,
    FeedbackComponent,
    FooterComponent,
    LoginComponent,
    PlainHeaderComponent,
    NotFoundComponent,
    HeaderComponent,
    HrComponent,
    ForgotPasswordComponent,
    SignUpComponent

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
