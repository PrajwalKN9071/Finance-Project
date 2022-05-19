import { Component, OnInit } from '@angular/core';
import { Finance } from '../finance';
import { FinanceService } from '../finance.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

  constructor(private card:FinanceService,private myrouter:Router) { }

  ngOnInit(): void {
  }
  carddetails:Finance=new Finance()
  addcard(addcardForm:any)
    {
     this.carddetails=addcardForm.value;
     console.log(this.carddetails);
     this.card.addcard(this.carddetails).subscribe(
       (data)=>{
        console.log(data);
        alert("Card Added")
        this.myrouter.navigate(['/payment'])
        
       },
       (error)=>
       {
         console.log(error)
       }
       )
    }
}
