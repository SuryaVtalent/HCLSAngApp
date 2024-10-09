import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILabs } from '../../Models/ILabs';

@Injectable({
  providedIn: 'root'
})
export class LabService {

 HostUrl:string="http://localhost:34689";
 LabwebPath:string="/api/Lab/";

  constructor(private httpser:HttpClient) { }


  GetAllLabs():Observable<ILabs[]>{
  
   return  this.httpser.get<ILabs[]>(this.HostUrl+this.LabwebPath+"GetAllLabDetails");

  }

  GetLabId(labid:number):Observable<ILabs>{
   return this.httpser.get<ILabs>(this.HostUrl+this.LabwebPath+"GetLabId?LabId="+labid);
  }

  InsertLab(lab:ILabs):Observable<number>{
   return this.httpser.post<number>(this.HostUrl+this.LabwebPath+"InsertLab",lab);
  }

  UpdateLab(labupdate:ILabs):Observable<number>{
  return this.httpser.put<number>(this.HostUrl+this.LabwebPath+"UpdateLab",labupdate);
  }



}
