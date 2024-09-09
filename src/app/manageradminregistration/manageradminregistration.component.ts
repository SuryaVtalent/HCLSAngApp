import { Component, OnInit } from '@angular/core';
import { IAdminTypes } from '../../Models/IAdminTypes';
import { AdmintypeService } from '../Services/admintype.service';
import { Admin } from '../../Models/Admin';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageradminregistration',
  templateUrl: './manageradminregistration.component.html',
  styleUrl: './manageradminregistration.component.css'
})
export class ManageradminregistrationComponent implements OnInit {

  AdmList:Admin;
  AdmTypeList!:IAdminTypes[];

  constructor(private admintype:AdmintypeService,private admins:AdminService,private router:Router){
    this.AdmList={adminId:0,name:"",gender:"",email:"",password:"",address:"",active:true,adminTypeId:0}
  }

  ngOnInit(): void {
    this.admintype.GetAdmintypes().subscribe(data=>{
      this.AdmTypeList=data;
    },error=>alert(error));
  }

  btn_Register():void{
    debugger;

    this.AdmList.adminId=parseInt(this.AdmList.adminId.toString());
    this.AdmList.adminTypeId=parseInt(this.AdmList.adminTypeId.toString());
    


    this.admins.Adminregistration(this.AdmList).subscribe(data=>{
      alert(data + " Record Inserted successfully");
      this.router.navigate(["login"]);
      
    },error=>{console.log(error)});
  }

  btn_Cancel():void{
    this.router.navigate(["home"]);
  }

}
