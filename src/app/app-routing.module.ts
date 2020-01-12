import { NgModule } from "@angular/core";
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { AddPhotoComponent } from "./components/sign-up/add-photo/add-photo.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/forgot-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up/add-photo', component: AddPhotoComponent },

  { path: '**', component:NotFoundComponent}
  ];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
