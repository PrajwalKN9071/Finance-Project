import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FinanceService } from '../finance.service';
import { Finance } from '../finance';
@Component({
  selector: 'app-updatecust',
  templateUrl: './updatecust.component.html',
  styleUrls: ['./updatecust.component.css']
})
export class UpdatecustComponent implements OnInit {

  constructor(private usc:FinanceService,private myrouter: Router,private http: HttpClient) { }

  ngOnInit(): void {this.usc.finduserdetails('shiva123').subscribe(
    (data)=>{
      console.log(data);
      this.Updatecust=data as Finance;
      console.log(this.Updatecust);
   },
   (error)=>
 {console.log(error)}
  )
}
Updatecust:Finance=new Finance();

updateCustomer(updatecustomerForm:any){
 this.Updatecust=updatecustomerForm.value
 console.log(this.Updatecust);
 this.usc.updateCustomer(this.Updatecust).subscribe(
   (data)=>{
     console.log(data);
     alert("user_detail updated")
   },
   (error)=>
   {console.log(error)}
  )
  }

  

}
