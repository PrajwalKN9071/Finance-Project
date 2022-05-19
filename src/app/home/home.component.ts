import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from '../finance.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private hm:FinanceService,private myrouter:Router) { }
  HomeList:any;
  loginid:any;
  ngOnInit(): void
  {
    this.loginid=localStorage.getItem("loginid")
    this.hm.getAddProduct().subscribe(
      (data)=>
      { 
        console.log(data);
        this.HomeList=data;
      },
      (error)=>
      { 
        console.log(error);
      }
    )
  }
 
  buyproduct(id:any,cost_per_unit:any,name:any)
  {
    localStorage.setItem("prodid",id)
    localStorage.setItem("costperunit",cost_per_unit)
    localStorage.setItem("prodname",name)
  }
 
 
}
