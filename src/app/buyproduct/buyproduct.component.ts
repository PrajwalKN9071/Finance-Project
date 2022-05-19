import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { Finance } from '../finance';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
  productsid:any=localStorage.getItem("prodid");
  productscost:any=localStorage.getItem("costperunit");
  email:any=localStorage.getItem("loginid")
  emicost:any=localStorage.getItem("emicost")
  cardno:any=localStorage.getItem("cardno")
  cardtype:any=localStorage.getItem("cardtype")
  months:any=localStorage.getItem("emimonth")
  productname:any=localStorage.getItem("prodname")
  finance:Finance=new Finance();
  constructor(private order:FinanceService,private myrouter:Router) { }
  Carddetails:any;
  ngOnInit(): void {
    this.email=localStorage.getItem("loginid")
  this.finance.id=this.productsid;
  this.finance.cost_per_unit=this.productscost;
  this.finance.emicost=this.emicost;
  this.finance.email=this.email;
  this.finance.emimonth=this.months;
  this.finance.name=this.productname;
  this.finance.CARDNO=this.cardno;
  this.finance.CARDTYPE=this.cardtype;
  this.finance.prodname=this.productname;


 
    this.order.searchcard(this.email).subscribe(
      (data)=>
      { 
        console.log(data);
        this.Carddetails=data;
        localStorage.setItem("cardno",this.Carddetails.cardno);
        localStorage.setItem("cardtype",this.Carddetails.cardtype);
       
        
      },
      (error)=>
      { 
        console.log(error);
      }
    )
   
  }
  buynow(){
    this.order.orderprod(this.finance).subscribe(
    (data)=>
    { 
      console.log(data);
      // alert("Buy Succesfully")
      this.myrouter.navigate(['/payment'])

    
    },
    (error)=>
      { 
        console.log(error);
      }
    
    )
  }
  
}
