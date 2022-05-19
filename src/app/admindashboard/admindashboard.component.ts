import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from '../finance.service';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  customerdetails:any;
  Carddetails:any;
  email:any;
  constructor(private cd:FinanceService,private myrouter:Router) { }

  ngOnInit(): void {
    this.cd.getAllCustomer().subscribe(
    (data)=>
    { 
      console.log(data);
      this.customerdetails=data;
    },
    (error)=>
    { 
      console.log(error);
    }
  )
  this.email=localStorage.getItem("loginid")
    this.cd.searchcard(this.email).subscribe(
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

  }
  gotoupdate(){
    this.myrouter.navigate(['/updatecust'])
  }

}
