import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDocspecid } from '../../Models/IDocSpecid';

@Injectable({
  providedIn: 'root'
})
export class DocspecidService {
  Hosturl:string="http://localhost:34689";
  DocSpecidPath:string="/api/DocSpec/";

  constructor(private httpser:HttpClient) { }


  GetAllDocSpecId():Observable<IDocspecid[]>{
  return  this.httpser.get<IDocspecid[]>(this.Hosturl+this.DocSpecidPath+"AllDocSpecDetails");
    
  }
}
