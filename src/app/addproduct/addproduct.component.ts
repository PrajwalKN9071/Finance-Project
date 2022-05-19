import { Component, OnInit } from '@angular/core';
import { Finance } from '../finance';
import { FinanceService } from '../finance.service';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private ap:FinanceService,private myrouter:Router) { }

  ngOnInit(): void {
  }
  add:Finance=new Finance()
  addproduct(addproductForm:any)
    {
     this.add=addproductForm.value;
     console.log(this.add);
     this.ap.AddProduct(this.add).subscribe(
       (data)=>{
        console.log(data);
        alert("Product Added")
        this.myrouter.navigate(['/admindashboard'])
       },
       (error)=>
       {
         console.log(error)
       }
       )
    }
}
