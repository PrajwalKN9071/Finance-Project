import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginValues:any
  loginValid:any;
  constructor(private vhs:FinanceService,private myrouter:Router) { }

  ngOnInit(): void {
  }
  validateAdminLogin(loginForm:any)
  {
    console.log(loginForm.value);
    this.loginValues=loginForm.value;
    console.log(this.loginValues);
    
    this.vhs.validateAdminLogin(this.loginValues).subscribe(
      (data)=>
      {
          console.log(data);
          this.loginValid=data;
          if(this.loginValid)
            {
               alert("valid")
               this.myrouter.navigate(['/admindashboard'])
            }
            else
            {
              alert("User Invalid");
            }
      }
    )


  }
}
