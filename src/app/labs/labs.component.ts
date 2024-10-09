import { Component, OnInit } from '@angular/core';
import { LabService } from '../Services/lab.service';
import { ILabs } from '../../Models/ILabs';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent implements OnInit {

  Lab:ILabs;

  flagEditLab:boolean=false;

  constructor(private labser:LabService){
    this.Lab={labId:0,name:"",dob:"",doj:"",phone:"",email:"",password:"",salary:0,address:"",active:true,logged:true,deptNo:0}
  }


  ngOnInit(): void {


    
  }

  btn_LabReg():void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flagEditLab=false;
    }else{
      this.flagEditLab=true;
    }


    this.Lab.salary=parseInt(this.Lab.salary.toString());

    this.Lab.deptNo=40;
    this.Lab.active=false;
    this.Lab.logged=false;


    this.labser.InsertLab(this.Lab).subscribe(data=>{
      alert(data + "Record Inserted successfully");
    },error=>alert(error));

  }

  btn_LabCan():void{

  }

}
