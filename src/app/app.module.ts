import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

import { PaymentComponent } from './payment/payment.component';
import { EmiComponent } from './emi/emi.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddcardComponent } from './addcard/addcard.component';
import { MainComponent } from './main/main.component';
import { UpdatecustComponent } from './updatecust/updatecust.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminloginComponent,
    AddproductComponent,
    HomeComponent,
    DeleteproductComponent,
    PaymentComponent,
    EmiComponent,
    AdmindashboardComponent,
    BuyproductComponent,
    UserdashboardComponent,
    AddcardComponent,
    MainComponent,
    UpdatecustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
