import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { Finance } from '../finance';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  constructor(private myrouter:Router) { }

  
  productsid:any=localStorage.getItem("prodid");
  productscost:any=localStorage.getItem("costperunit");
monthForm:any;
months:any=0;
finance:Finance=new Finance();
emicost:any;

calculate(){
  
  console.log(this.months)
this.emicost=this.productscost/this.months;
console.log(this.emicost)
localStorage.setItem("emicost",this.emicost)
localStorage.setItem("emimonth",this.months)

}
clicking (){
  // this.myrouter.navigate(['/buy'])
     this.myrouter.navigate(['/emi'])
     
}
ngOnInit(): void {
  // this.finance.id=this.productsid;
  // this.finance.cost_per_unit=this.productscost;
 
}

}