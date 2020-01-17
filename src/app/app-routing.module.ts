import { NgModule } from "@angular/core";
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { AddPhotoComponent } from "./components/sign-up/add-photo/add-photo.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { BecomeChefComponent } from "./components/become-chef/become-chef.component";
import { CreateDishComponent } from "./components/create-dish/create-dish.component";


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/forgot-password', component: ForgotPasswordComponent },

  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up/add-photo', component: AddPhotoComponent },

  { path: 'become-chef', component: BecomeChefComponent },
  { path: 'become-chef/sign-up', component: SignUpComponent },
  { path: 'become-chef/sign-up/add-photo', component: AddPhotoComponent },
  { path: 'become-chef/sign-up/add-photo/create-dish', component: CreateDishComponent },


  // { path: 'become-chef/create-dish', component: CreateDishComponent },


  { path: '**', component:NotFoundComponent}
  ];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
