import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from '../finance.service'
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  orderdetails:any;
  Carddetails:any;
  constructor(private sc:FinanceService,private myrouter:Router) { }
  email:any;
  ngOnInit(): void {
   this.email=localStorage.getItem("loginid")
    this.sc.searchcard(this.email).subscribe(
      (data)=>
      { 
        console.log(data);
        this.Carddetails=data;
        
      },
      (error)=>
      { 
        console.log(error);
      }
    )
    this.email=localStorage.getItem("loginid")
    this.sc.getorderbyemail(this.email).subscribe(
      (data)=>
      { 
        console.log(data);
        this.orderdetails=data;
        
      },
      (error)=>
      { 
        console.log(error);
      }
    )
  }

}
