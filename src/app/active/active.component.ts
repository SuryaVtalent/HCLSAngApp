import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';
import { Admin } from '../../Models/Admin';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent implements OnInit {

  AdminActive:Admin;

  constructor(private admser:AdminService,private router:Router){
    this.AdminActive={adminId:0,name:"",email:"",password:"",gender:"",active:false,address:"",adminTypeId:0}
  }

  ngOnInit(): void {
    
  }

  btn_ClickHere():void{
    debugger;
    this.AdminActive=JSON.parse(window.sessionStorage.getItem("login")!.toString());
    this.AdminActive.active=true;
    this.admser.Updateadmin(this.AdminActive).subscribe(data=>{
      alert(data +" Account Activated");
      this.router.navigate(["login"]);
      
    },error=>alert(error));
    
  }



}
