import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../../Models/IDepartment';
import { DepartmentService } from '../Services/department.service';
import { HelperService } from '../Services/helper.service';
import { IHelpers } from '../../Models/IHelpers';

@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrl: './helpers.component.css'
})
export class HelpersComponent implements OnInit {

  DeptList!:IDepartment[];
  Helper:IHelpers;

  flagEditHelper:boolean=false;

constructor(private deptser:DepartmentService,private helpser:HelperService){
  this.Helper={helpId:0,name:"",dob:"",doj:"",phone:"",email:"",password:"",salary:0,address:"",active:true,logged:true,assigned:true,deptNo:0}
}

  ngOnInit(): void {
    
    this.deptser.GetAllDept().subscribe(data=>{
      this.DeptList=data;
    },error=>alert(error));
    
  }

  btn_HelpReg():void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flagEditHelper=false;
    }else{
      this.flagEditHelper=true;
    }

    this.Helper.salary=parseInt(this.Helper.salary.toString());


    this.Helper.deptNo=20;
    this.Helper.active=false;
    this.Helper.assigned=false;
    this.Helper.logged=false;


    this.helpser.InsertHelper(this.Helper).subscribe(data=>{
      alert(data +"Record Inserted Successfully");
    },error=>alert(error));

  }

  btn_HelpCan():void{

  }

}
