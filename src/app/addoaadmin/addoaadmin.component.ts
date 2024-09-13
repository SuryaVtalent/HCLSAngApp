import { Component, OnInit } from '@angular/core';
import { IAdminTypes } from '../../Models/IAdminTypes';
import { AdminService } from '../Services/admin.service';
import { AdmintypeService } from '../Services/admintype.service';
import { Router } from '@angular/router';
import { Admin } from '../../Models/Admin';

@Component({
  selector: 'app-addoaadmin',
  templateUrl: './addoaadmin.component.html',
  styleUrl: './addoaadmin.component.css'
})
export class AddoaadminComponent implements OnInit {

  Adminlist:Admin;
  AdminTypeList!:IAdminTypes[];

  constructor(private admser:AdminService,private admtypser:AdmintypeService,private router:Router){
   this.Adminlist={adminId:0,name:"",password:"",gender:"",email:"",active:true,address:"",adminTypeId:0}
  }


  ngOnInit(): void {
    this.admtypser.GetAdmintypes().subscribe(data=>{
      this.AdminTypeList=data;
    },error=>{
      alert(error);
    });

    let sessionLogval=window.sessionStorage.getItem("login");
    if(sessionLogval==null){
      this.router.navigate(["login"]).then(()=>{
        window.location.reload();
      })
    }
    
  }




  btn_Reg():void{

    // this.Adminlist.adminTypeId=parseInt(this.Adminlist.adminTypeId.toString());
    //We are directly adding the Values here...
    
   this.Adminlist.active=false;
   this.Adminlist.adminTypeId=20;

    this.admser.Adminregistration(this.Adminlist).subscribe(data=>{
      alert(data + "Registered Succesfully");
    },error=>alert(error));

  }

  btn_Can():void{
  this.router.navigate(["manageradmin"]);
  }

}
