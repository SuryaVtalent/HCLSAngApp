import { Component, OnInit } from '@angular/core';
import { ReceptionService } from '../Services/reception.service';
import { IReception } from '../../Models/IReception';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhospitalemployees',
  templateUrl: './addhospitalemployees.component.html',
  styleUrl: './addhospitalemployees.component.css'
})
export class AddhospitalemployeesComponent implements OnInit {

   Recp:IReception;

   flagEditRec:boolean=true;
   

  constructor(private recpser:ReceptionService,private router:Router){
    this.Recp={recpId:0,name:"",dob:"",doj:"",email:"",phone:"",password:"",salary:0,address:"",active:true,logged:true,deptNo:0}
  }

  ngOnInit(): void {
    
  }

  btn_RecReg():void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flagEditRec=true;
    }else{
      this.flagEditRec=false;
    }

    
     this.Recp.salary=parseInt(this.Recp.salary.toString());

     this.Recp.deptNo=10;
     this.Recp.active=false;
     this.Recp.logged=false;


    this.recpser.InsertReception(this.Recp).subscribe(data=>{
      alert(data +"Record Registered successfully");
      this.router.navigate(["operation"]);
    },error=>alert(error));

  }

  btn_RecCan():void{

  }

}
