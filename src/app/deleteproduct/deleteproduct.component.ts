import { Component, OnInit } from '@angular/core';
import { Finance } from '../finance';
import { FinanceService } from '../finance.service';
@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(private dp:FinanceService) { }
  
  ngOnInit(): void {
  }
  delete:Finance=new Finance()
  DeleteProduct(deleteproductForm:any)
    {

     this.delete=deleteproductForm.value;
     console.log(this.delete);
     this.dp.DeleteProduct(this.delete).subscribe(
       (data)=>{
        console.log(data);
        alert("Product deleted")
       },
       (error)=>
       {
         console.log(error)
       }
       )
    }
   
} 
