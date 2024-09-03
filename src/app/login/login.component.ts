import { Component, OnInit } from '@angular/core';
import { Admin } from '../../Models/Admin';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  Username:string="";
  Password:string="";

  LoginCheck!:Admin;

  constructor(private admserv:AdminService,private route:Router){

  }

  ngOnInit(): void {
   
    
    
  }

  btn_Login():void{
    //Check For User Credential
    debugger;

    this.admserv.Checklogin(this.Username,this.Password).subscribe((data:any)=>{
      if(data==null){
        alert("You are not registered with Us");
        this.route.navigate(["register"]);
      }
      else{
        window.sessionStorage.setItem("login",data);
        window.sessionStorage.setItem("adminType",data.adminTypeId.toString());
        if(data.adminTypeId==10){
          this.route.navigate(["manageradmin"]).then(()=>{
            window.location.reload();
          });
        }
        else{
          this.route.navigate(["operation"]).then(()=>{
            window.location.reload();
          });
        }
      }
    })



  }

  btn_Cancel():void{
    this.Username="";
    this.Password="";
  }

  

}
