import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Admin } from '../../Models/Admin';
import { Router } from '@angular/router';
import { parse } from 'node:path';

@Component({
  selector: 'app-manageroaadmin',
  templateUrl: './manageroaadmin.component.html',
  styleUrl: './manageroaadmin.component.css'
})
export class ManageroaadminComponent implements OnInit {

 AdmList!:Admin[];
 adm:Admin;

 FlagEdit:boolean=false;
 FlagCancel:boolean=true;

 FlagDelete:boolean=false;
 FlagDelCancel:boolean=true;

 
  constructor(private admser:AdminService,private router:Router){
    this.adm={adminId:0,name:"",gender:"",email:"",password:"",address:"",active:true,adminTypeId:0}
  }


  ngOnInit(): void {
    
    let sessionlogVal=window.sessionStorage.getItem("login");
    if(sessionlogVal==null){
      this.router.navigate(["login"]).then(()=>{
        window.location.reload();
      });
    }

    this.GetOAdmins();

    

    

    
    
  }

  btn_EditClk(adminId:number):void{

    let sessionlogval=window.sessionStorage.getItem("login");
    if(sessionlogval==null){
      this.FlagEdit=false;
      this.FlagCancel=true;

    }else{
      this.FlagEdit=true;
      this.FlagCancel=false;
    }
    
    


    this.admser.GetAdminId(adminId).subscribe(data=>{
     // let sessionLogval=window.sessionStorage.getItem("login");
      //if(data.adminTypeId=20){  
        this.adm=data;
      //}
      
    },error=>alert(error));
  
   

  }

  btn_DeleteClk(adminId:number):void{

    let sessionlogval=window.sessionStorage.getItem("login");
    if(sessionlogval==null){
      this.FlagDelete=false;
      this.FlagDelCancel=true;

    }else{
      this.FlagDelete=true;
      this.FlagDelCancel=false;
    }


  this.admser.GetAdminId(adminId).subscribe(data=>{
    this.adm=data;
  },error=>alert(error));
  }

  GetOAdmins():void{
    this.admser.GetAdminTypeByAdmin().subscribe(data=>{
      this.AdmList=data;
      
 
       console.log(data);
     },error=>alert(error));
 
  }

  btn_UpdateEdit():void{
 
    let sessionlogval=window.sessionStorage.getItem("login");
    if(sessionlogval==null){
      this.FlagEdit=true;
      this.FlagCancel=false;

    }else{
      this.FlagEdit=false;
      this.FlagCancel=true;
    }
    
    
    

    this.adm.adminId=parseInt(this.adm.adminId.toString());
    this.adm.active=false;
    this.adm.adminTypeId=parseInt(this.adm.adminTypeId.toString());



    this.admser.Updateadmin(this.adm).subscribe(data=>{
      alert(data + "Record Update succesfully");
      console.log(data);
      //this.GetOAdmins();
    },error=>alert(error));

  }

  btn_CancelEdit():void{
    let sessionlogval=window.sessionStorage.getItem("login");
    if(sessionlogval==null){
      this.FlagEdit=true;
      this.FlagCancel=false;

    }else{
      this.FlagEdit=false;
      this.FlagCancel=true;
    }

  
  }

  btn_Delete(adminid:number):void{
    let sessionlogval=window.sessionStorage.getItem("login");
    if(sessionlogval==null){
      this.FlagDelete=true;
      this.FlagDelCancel=false;

    }else{
      this.FlagDelete=false;
      this.FlagDelCancel=true;
    }
    

    this.admser.Deleteadmin(adminid).subscribe(data=>{
      alert(data +"Record Deleted Successfully");
    },error=>{alert(error)});
  }

  btn_DeleteCancel():void{
    let sessionlogval=window.sessionStorage.getItem("login");
    if(sessionlogval==null){
      this.FlagDelete=true;
      this.FlagDelCancel=false;

    }else{
      this.FlagDelete=false;
      this.FlagDelCancel=true;
    }

  }


}
