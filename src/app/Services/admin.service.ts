import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../../Models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

HostUrl:string="http://localhost:34689";
AdminWebApiPath:string="/api/Adminn/";

  constructor(private httpser:HttpClient) { }

  GetAll():Observable<Admin[]>{
    return this.httpser.get<Admin[]>(this.HostUrl+this.AdminWebApiPath+"AllOperationalAdmins");
 
   }

   GetAdminId(adm:number):Observable<Admin>{
   return  this.httpser.get<Admin>(this.HostUrl+this.AdminWebApiPath+"AdminByAdminId?AdminId="+adm);
   }

   Checklogin(em:string,pwd:string):Observable<Admin>{
    debugger;
   return this.httpser.get<Admin>(this.HostUrl+this.AdminWebApiPath+"CheckLogin?Email="+em+"&Password="+pwd);
   }

   

  Adminregistration(adm:Admin):Observable<number>{
   return this.httpser.post<number>(this.HostUrl+this.AdminWebApiPath+"AdminRegistration",adm);

  }

  Updateadmin(adm:Admin):Observable<number>{
   return this.httpser.put<number>(this.HostUrl+this.AdminWebApiPath+"UpdateAdmin",adm)
  }
}
