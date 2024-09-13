import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmintypeService } from '../Services/admintype.service';
import { AdminService } from '../Services/admin.service';
import { IAdminTypes } from '../../Models/IAdminTypes';
import { Admin } from '../../Models/Admin';

@Component({
  selector: 'app-operationaladmin',
  templateUrl: './operationaladmin.component.html',
  styleUrl: './operationaladmin.component.css'
})
export class OperationaladminComponent implements OnInit{

 AdminList:Admin; 
 Admintypelist!:IAdminTypes[];

 FlagEdit1:boolean=true;
 FlagUpdate1:boolean=false;

  constructor(private router:Router,private admtypeser:AdmintypeService,private admser:AdminService){
    this.AdminList={adminId:0,name:"",gender:"",email:"",password:"",address:"",active:true,adminTypeId:0}
  }

  ngOnInit(): void {
   let sessionLogVal= window.sessionStorage.getItem("login");
   if(sessionLogVal==null){
    this.router.navigate(["login"]).then(()=>{
    window.location.reload();
    });
   }

  this.GetAdminType();
  this.GetAdmList(); 

  }

  GetAdminType():void{
    this.admtypeser.GetAdmintypes().subscribe(data=>{
      this.Admintypelist=data;
    },error=>alert(error));
    
  }

  GetAdmList():void{
    this.admser.GetAdminId(parseInt(window.sessionStorage.getItem("adminId")!.toString())).subscribe(data=>{
      this.AdminList=data;
    },error=>alert(error));
  }

  btn_Editt():void{
   
    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.FlagEdit1=true;
      this.FlagUpdate1=false;
    }else{
      this.FlagEdit1=false;
      this.FlagUpdate1=true;
    }


    this.AdminList.address="";
    this.AdminList.password="";
  }

  btn_Updatee():void{
    let sessionval=window.sessionStorage.getItem("login");
      
    if(sessionval==null){
      this.FlagEdit1=false;
      this.FlagUpdate1=true;
    }else{
      this.FlagEdit1=true;
      this.FlagUpdate1=false;
    }

    this.admser.Updateadmin(this.AdminList).subscribe(data=>{
      alert(data + " Record Updated Successfully");
    },error=>alert(error));
  }

  btn_Cancel():void{
    
    let sessionval=window.sessionStorage.getItem("login");
    if(sessionval==null){
      this.FlagEdit1=false;
      this.FlagUpdate1=true;
    }else{
      this.FlagEdit1=true;
      this.FlagUpdate1=false;
    }

    this.GetAdmList();
    this.GetAdminType();

  }


}
