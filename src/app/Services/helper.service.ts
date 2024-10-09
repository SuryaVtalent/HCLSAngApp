import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHelpers } from '../../Models/IHelpers';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  HostUrl:string="http://localhost:34689";
  HelpWebPath:string="/api/Helper/";

  constructor(private httpser:HttpClient) { }


  GetAllHelpers():Observable<IHelpers[]>{
   return this.httpser.get<IHelpers[]>(this.HostUrl+this.HelpWebPath+"GetAllHelperDetails");
    
  }

  GetHelperId(helpid:number):Observable<IHelpers>{
   return this.httpser.get<IHelpers>(this.HostUrl+this.HelpWebPath+"GetHelperById?HelpId="+helpid);
  }

  InsertHelper(help:IHelpers):Observable<number>{
   return this.httpser.post<number>(this.HostUrl+this.HelpWebPath+"InsertHelper",help);
  }

  UpdateHelper(helpupdate:IHelpers):Observable<number>{
   return this.httpser.put<number>(this.HostUrl+this.HelpWebPath+"UpdateHelper",helpupdate);
  }

}
