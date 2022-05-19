import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private vhs:FinanceService,private myrouter:Router) { }
  ngOnInit(): void {
  }
  loginValues:any;
  loginValid:any;
  
  validateLogin(loginForm:any)
  {
    console.log(loginForm.value);
    this.loginValues=loginForm.value;
    console.log(this.loginValues);
    
    this.vhs.validateLogin(this.loginValues).subscribe(
      (data)=>
      {
          console.log(data);
          this.loginValid=data;
          if(this.loginValid)
            {

               alert("valid")
               this.myrouter.navigate(['/home'])
               localStorage.setItem("loginid",this.loginValues.loginid); 
            }
            else
            {
              alert("User Invalid");
            }
      }
    )
  }
  
  

}
