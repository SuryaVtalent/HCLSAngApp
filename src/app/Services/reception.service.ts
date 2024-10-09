import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReception } from '../../Models/IReception';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  HostUrl:string="http://localhost:34689";
  RecepWebApiPath:string="/api/Reception/";


  constructor(private Httpser:HttpClient) { }


  GetAllReception():Observable<IReception[]>{
   return this.Httpser.get<IReception[]>(this.HostUrl+this.RecepWebApiPath+"AllReceptionDetails");
  }

  GetRecById(rec:number):Observable<IReception>{
  return  this.Httpser.get<IReception>(this.HostUrl+this.RecepWebApiPath+"GetReceptionById?RecpId="+rec);
  }

  InsertReception(rec:IReception):Observable<number>{
    debugger;
   return this.Httpser.post<number>(this.HostUrl+this.RecepWebApiPath+"InsertReception",rec);
  }

  UpdateReception(recup:IReception):Observable<number>{
   return this.Httpser.put<number>(this.HostUrl+this.RecepWebApiPath+"UpdateReception",recup);
  }

  DeleteReception(drecp:number):Observable<number>{
   return this.Httpser.delete<number>(this.HostUrl+this.RecepWebApiPath+"DeleteReception?RecpId="+drecp);
  }

}
