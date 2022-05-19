import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { EmiComponent } from './emi/emi.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddcardComponent } from './addcard/addcard.component';
import { MainComponent } from './main/main.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { UpdatecustComponent } from './updatecust/updatecust.component';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'registercustomer',component:RegisterComponent},
  {path:'logincustomer',component:LoginComponent},
  {path:'loginadmin',component:AdminloginComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'home',component:HomeComponent},
  {path:'deleteproduct',component:DeleteproductComponent},
  {path:'payment',component:PaymentComponent},
  {path:'emi',component:EmiComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'userdash',component:UserdashboardComponent},
  {path:'addcard',component:AddcardComponent},
  {path:'buy',component:BuyproductComponent},
  {path:'updatecust',component:UpdatecustComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
