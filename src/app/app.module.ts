import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { environment } from "../environments/environment"; //firebase
import { AngularFireModule } from "@angular/fire";
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MenuComponent } from "./menu/menu.component";
import { FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";

import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { RadioButtonModule } from "primeng/radiobutton";

import { HowItWorksComponent } from "./landing-page/how-it-works/how-it-works.component";
import { FoomiesNearYouComponent } from "./landing-page/foomies-near-you/foomies-near-you.component";
import { FeedbackComponent } from "./landing-page/feedback/feedback.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./landing-page/header/header.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { HrComponent } from "./hr/hr.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AddPhotoComponent } from "./sign-up/add-photo/add-photo.component";
import { BecomeChefComponent } from "./become-chef/become-chef.component";
import { CreateDishComponent } from "./create-dish/create-dish.component";
import { CreateDishTemporaryCRUDComponent } from "./create-dish-temporary-crud/create-dish-temporary-crud.component";

import { FoomiesService } from "./services/foomies.service";
import { AuthService } from "./services/auth.service";
import { DishService } from "./services/dish.service";
import { MessageService } from "primeng/api";

import { SandboxComponent } from "./sandbox/sandbox.component";
import { AddDishFormComponent } from "./add-dish-form/add-dish-form.component";

import { ToastModule } from "primeng/toast";
import { ChefSignupComponent } from "./chef-signup/chef-signup.component";
import { ChefService } from "./services/chef.service";
import { ChefDetailsComponent } from "./chef-details/chef-details.component";
import { DishDetailsComponent } from './dish-details/dish-details.component';

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
    ChefSignupComponent,
    ChefDetailsComponent,
    DishDetailsComponent
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
    DropdownModule,
    RadioButtonModule,

    AppRoutingModule,
    ToastModule,

    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, "FoommySite"),
    AngularFirestoreModule
  ],
  providers: [
    FoomiesService,
    AuthService,
    DishService,
    MessageService,
    ChefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
