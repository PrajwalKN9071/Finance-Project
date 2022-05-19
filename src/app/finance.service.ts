import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Finance } from './finance';


@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9091/rest/api";
  getAllCustomer()
  {
    return this.myhttp.get(this.restUrl+"/customer")
  }
  addCustomer(cd :Finance)
  {
    return this.myhttp.post(this.restUrl+"/customer",cd);
  }
  validateLogin(logValues:any)
  {
        return this.myhttp.get(this.restUrl+"/validatelogin/"+logValues.loginid+"/"+logValues.loginpass);
  }
  validateAdminLogin(logValues:any)
  {
        return this.myhttp.get(this.restUrl+"/validateAdminlogin/"+logValues.loginid+"/"+logValues.loginpass);
  }
  getAddProduct()
  {
    return this.myhttp.get(this.restUrl+"/product")
  }
  AddProduct(cd :Finance)
  {
    return this.myhttp.post(this.restUrl+"/product",cd);
  }
  DeleteProduct(dp:Finance)
  {
    return this.myhttp.delete(this.restUrl+"/deleteproduct/"+dp.id);
  }
 
  searchproductbyid(id:string) //FETCH BY NO
  {
      return this.myhttp.get(this.restUrl+"/product/"+id);
  }
  addcard(card:Finance){
    return this.myhttp.post(this.restUrl+"/carddetails",card);
  }
  searchcard(sc:any){
    return this.myhttp.get(this.restUrl+"/carddetails/"+sc);
  }
  orderprod(order:Finance){
   
    return this.myhttp.post(this.restUrl+"/order",order);
  }
  getorderbyemail(go:any){
    return this.myhttp.get(this.restUrl+"/order/"+go);
  }
  updateCustomer(uc:Finance){
    return this.myhttp.put(this.restUrl+"/updatecustomer",uc)
  }
  
  finduserdetails(email_id:string){
     return this.myhttp.get(this.restUrl+"/vcustomer/"+email_id)
  
   
  }

}
