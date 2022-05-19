import { Component, OnInit } from '@angular/core';
import { Finance } from '../finance';
import { FinanceService } from '../finance.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private cd:FinanceService,private myrouter:Router) { }

  ngOnInit(): void {
  }
register:Finance=new Finance()
savecustomer(customerForm:any)
  {
   this.register=customerForm.value;
   console.log(this.register);
   this.cd.addCustomer(this.register).subscribe(
     (data)=>{
      console.log(data);
      alert("User Added")
      this.myrouter.navigate(['/logincustomer'])
     },
     (error)=>
     {
       console.log(error)
     }
     )
  }
}
