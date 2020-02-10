import { NgModule } from "@angular/core";
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AddPhotoComponent } from "./sign-up/add-photo/add-photo.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { BecomeChefComponent } from "./become-chef/become-chef.component";
import { ChefSignupComponent } from "./chef-signup/chef-signup.component";
import { CreateDishComponent } from "./create-dish/create-dish.component";
import { AddDishFormComponent } from "./add-dish-form/add-dish-form.component";
import { AddDishFormPreviewComponent } from "./add-dish-form-preview/add-dish-form-preview.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "login/forgot-password", component: ForgotPasswordComponent },

  { path: "sign-up", component: SignUpComponent },
  { path: "sign-up/add-photo", component: AddPhotoComponent },

  { path: "become-chef", component: BecomeChefComponent },
  { path: "become-chef/sign-up", component: ChefSignupComponent },
  { path: "become-chef/sign-up/add-photo", component: AddPhotoComponent },
  // { path: 'become-chef/sign-up/create-dish', component: CreateDishComponent },

  { path: "create-dish", component: CreateDishComponent },

  { path: "add-dish-form", component: AddDishFormComponent },
  {
    path: "add-dish-form/add-dish-form-preview",
    component: AddDishFormPreviewComponent
  },

  // { path: 'become-chef/create-dish', component: CreateDishComponent },

  { path: "**", component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload"
    })
  ]
})
export class AppRoutingModule {}
