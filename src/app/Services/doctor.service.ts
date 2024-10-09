import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../../Models/IDoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  Hosturl:string="http://localhost:34689";
  DocWebPath:string="/api/Doctor/";

  constructor(private httpser:HttpClient) { }

  GetAllDoc():Observable<IDoctor[]>{
 return this.httpser.get<IDoctor[]>(this.Hosturl+this.DocWebPath+"AllDoctors");
  }

  GetDocId(docid:number):Observable<IDoctor>{
   return this.httpser.get<IDoctor>(this.Hosturl+this.DocWebPath+"GetDoctorById?DocId="+docid);
  }

  InsertDoc(doc:IDoctor):Observable<number>{
   return this.httpser.post<number>(this.Hosturl+this.DocWebPath+"InsertDoctor",doc);
  }

  UpdateDoc(docupdate:IDoctor):Observable<number>{
  return this.httpser.put<number>(this.Hosturl+this.DocWebPath+"UpdateDoctor",docupdate);
  }

  DeleteDoc(docId:number):Observable<number>{
  return  this.httpser.delete<number>(this.Hosturl+this.DocWebPath+"DeleteDoctor?DocId="+docId);
  }

}
