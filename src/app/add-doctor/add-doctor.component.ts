import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Services/doctor.service';
import { DocspecidService } from '../Services/docspecid.service';
import { DepartmentService } from '../Services/department.service';
import { IDocspecid } from '../../Models/IDocSpecid';
import { IDepartment } from '../../Models/IDepartment';
import { IDoctor } from '../../Models/IDoctor';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent implements OnInit {

 DocspecList!:IDocspecid[];
 DeptList!:IDepartment[];
 Doc:IDoctor;
 
 flagEditDoc=false;
  
 Validations():boolean{

  if(this.Doc.name==""){
    alert("Please Enter Name");
    return false;
  }

  if(this.Doc.email==""){
    alert("Please Enter Email");
    return false;
  }

  if(this.Doc.password){
    alert("Please Enter Password");
  }

  return true;
 }



  constructor(private docser:DoctorService,private docspecser:DocspecidService,private deptser:DepartmentService){
    this.Doc={docId:0,name:"",dob:"",doj:"",phone:"",email:"",password:"",salary:0,address:"",active:true,logged:true,assigned:true,docSpecId:0,deptNo:0}
  }

  ngOnInit(): void {
    this.deptser.GetAllDept().subscribe(data=>{
    this.DeptList=data;
    },error=>alert(error));
  

    this.docspecser.GetAllDocSpecId().subscribe(data=>{
      this.DocspecList=data;
    },error=>alert(error));


  }


  btn_RegDoc():void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flagEditDoc=false;
    }else{
      this.flagEditDoc=true;
    }

    this.Doc.salary=parseInt(this.Doc.salary.toString());
    this.Doc.docSpecId=parseInt(this.Doc.docSpecId.toString());

    this.Doc.deptNo=30;
    this.Doc.assigned=false;
    this.Doc.active=false;
    this.Doc.logged=false;

    if(this.Validations()==true){
   
      this.docser.InsertDoc(this.Doc).subscribe(data=>{
        alert(data +"Registered successfully");
      },error=>alert(error));
  

    }

    
  }

  btn_CanDoc():void{

  }

}
