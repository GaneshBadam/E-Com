import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginUserService } from './loginuser.service';

import{ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
  
@NgModule({
 declarations: [
   AppComponent,
   RegisterComponent,
   LoginComponent,
   NavbarComponent,
   HomeComponent,
   ProductsComponent,
   ConfirmEqualValidatorDirective
 ],
 imports: [
   BrowserModule,
   HttpModule,
   FormsModule,
   RouterModule.forRoot([
     { path:'', redirectTo:'home', pathMatch:"full" },
     { path:'home', component:HomeComponent },
     { path:'register', component:RegisterComponent },
     { path:'login', component:LoginComponent },
     ])
 ],
  providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }

