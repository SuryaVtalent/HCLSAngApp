import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../Services/department.service';
import { IDepartment } from '../../Models/IDepartment';
import { IReception } from '../../Models/IReception';
import { ReceptionService } from '../Services/reception.service';
import { Router } from '@angular/router';
import { parse } from 'path';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrl: './receptionist.component.css'
})
export class ReceptionistComponent implements OnInit {

  DeptList!:IDepartment[];
  RecpList!:IReception[];
  Recp:IReception;

  flagEditRec:boolean=false;

  constructor(private deptser:DepartmentService,private recser:ReceptionService,private router:Router){
    this.Recp={recpId:0,name:"",dob:"",doj:"",email:"",phone:"",password:"",salary:0,address:"",active:true,logged:true,deptNo:0}
  }

  ngOnInit(): void {
    this.deptser.GetAllDept().subscribe(data=>{
      this.DeptList=data;
      console.log(data);
    },error=>alert(error));
   
    this.recser.GetAllReception().subscribe(data=>{
      this.RecpList=data;
    },error=>alert(error));



  }


  Validation():boolean{
    //Validate Recp object Properties
    if(this.Recp.name==""){
     alert("Please Enter Name");
     return false;
    }

    if(this.Recp.dob==""){
      alert("Please Enter DOB");
      return false;
    }

    if(this.Recp.doj==""){
      alert("Please Enter DOB");
      return false;
    }

    if(this.Recp.email==""){
      alert("Please Enter DOB");
      return false;
    }

    if(this.Recp.password==""){
      alert("Please Enter DOB");
      return false;
    }

    return true;

  }

  btn_Reg():void{
   debugger;

   let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flagEditRec=false;
    }else{
      this.flagEditRec=true;
    }
   
    this.Recp.salary=parseInt(this.Recp.salary.toString());
    // this.Recp.deptNo=parseInt(this.Recp.deptNo.toString());

    this.Recp.deptNo=10;
    
    this.Recp.active=false;
    this.Recp.logged=false;


   if(this.Validation()==true){
    
    this.recser.InsertReception(this.Recp).subscribe(data=>{
      alert(data +"Registered Successfully");
     },error=>alert(error));
     
   }

   
  }

  btn_Can():void{
    this.router.navigate(["operationadmin"]);

  }

}
