import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment'; //firebase
import { AngularFireModule } from '@angular/fire';
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';


import { HowItWorksComponent } from './components/landing-page/how-it-works/how-it-works.component';
import { FoomiesNearYouComponent } from './components/landing-page/foomies-near-you/foomies-near-you.component';
import { FeedbackComponent } from './components/landing-page/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/landing-page/header/header.component';
import { NotFoundComponent} from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HrComponent } from './components/hr/hr.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddPhotoComponent } from './components/sign-up/add-photo/add-photo.component';
import { BecomeChefComponent } from './components/become-chef/become-chef.component';
import { CreateDishComponent } from './components/create-dish/create-dish.component';
import { CreateDishTemporaryCRUDComponent } from './components/create-dish-temporary-crud/create-dish-temporary-crud.component';

import{ FoomiesService } from './services/foomies.service';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { AddDishFormComponent } from './add-dish-form/add-dish-form.component';

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
    NotFoundComponent,
    HeaderComponent,
    HrComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    AddPhotoComponent,
    BecomeChefComponent,
    CreateDishComponent,
    CreateDishTemporaryCRUDComponent,
    SandboxComponent,
    AddDishFormComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CardModule,
    CheckboxModule,
    AppRoutingModule,

    AngularFireModule,
    // AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'FoommySite'),
    AngularFirestoreModule,
  ],
  providers: [
    FoomiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
