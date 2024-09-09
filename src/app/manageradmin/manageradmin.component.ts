import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAdminTypes } from '../../Models/IAdminTypes';
import { AdmintypeService } from '../Services/admintype.service';
import { Admin } from '../../Models/Admin';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-manageradmin',
  templateUrl: './manageradmin.component.html',
  styleUrl: './manageradmin.component.css'
})
export class ManageradminComponent implements OnInit {


  FlagEdit:boolean=true;
  FlagUpdate:boolean=false;


  AdmList:Admin;
  AdminTypeList!:IAdminTypes[];

 constructor(private router:Router,private admtypeser:AdmintypeService,private admser:AdminService){
this.AdmList={adminId:0,name:"",gender:"",email:"",password:"",address:"",active:true,adminTypeId:0}
 }

  ngOnInit(): void {

  this.admtypeser.GetAdmintypes().subscribe(data=>{
    this.AdminTypeList=data;
  },error=>alert(error));
    
  
  this.admser.GetAdminId(parseInt(window.sessionStorage.getItem("adminId")!.toString())).subscribe(data=>{
    this.AdmList=data;
  },error=>alert(error));

  let sessionLogval=window.sessionStorage.getItem("login");
  if(sessionLogval==null){
    this.router.navigate(["login"]).then(()=>{
      window.location.reload();
    })

  }

    
    
  }


  btn_Edit():void{

   
    let sessionVal=window.sessionStorage.getItem("login");
    if(sessionVal==""){
      this.FlagEdit=true;
      this.FlagUpdate=false;
    }
    else{
      this.FlagEdit=false;
      this.FlagUpdate=true;
    }
      
       
    this.AdmList.password="";
    this.AdmList.address="";

    
  }


  btn_Update():void{
    let sessionVal=window.sessionStorage.getItem("login");
    if(sessionVal==""){
      this.FlagEdit=false;
      this.FlagUpdate=true;
    }
    else{
      this.FlagEdit=true;
      this.FlagUpdate=false;
    }
     
    this.admser.Updateadmin(this.AdmList).subscribe(data=>{
      alert(data +"Record Updated Successfully");
    },error=>alert(error));

    
  }

  

  

}
