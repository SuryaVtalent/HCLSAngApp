import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../../Models/IDepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

 Hosturl:string="http://localhost:34689";
 DeptWebPath:string="/api/Department/";

  constructor(private httpser:HttpClient) { }


  GetAllDept():Observable<IDepartment[]>{
   return this.httpser.get<IDepartment[]>(this.Hosturl+this.DeptWebPath+"AllDepartments");
  }
}
