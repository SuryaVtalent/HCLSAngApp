import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminTypes } from '../../Models/IAdminTypes';

@Injectable({
  providedIn: 'root'
})
export class AdmintypeService  {

  HostURl:string="http://localhost:34689";
  AdminTypewebPath:string="/api/AdminTypes/";

  constructor(private httpser:HttpClient) { }


  GetAdmintypes():Observable<IAdminTypes[]>{
   return this.httpser.get<IAdminTypes[]>(this.HostURl+this.AdminTypewebPath+"AllAdminTypes");

  }
}
