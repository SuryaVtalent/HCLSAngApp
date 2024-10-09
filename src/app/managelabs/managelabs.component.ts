import { Component, OnInit } from '@angular/core';
import { ILabs } from '../../Models/ILabs';
import { LabService } from '../Services/lab.service';

@Component({
  selector: 'app-managelabs',
  templateUrl: './managelabs.component.html',
  styleUrl: './managelabs.component.css'
})
export class ManagelabsComponent implements OnInit {

  LabList!:ILabs[];
  Lab:ILabs;

  flaglabEdit=false;
  flaglabDelete=false;

  constructor(private labser:LabService){
   this.Lab={labId:0,name:"",dob:"",doj:"",phone:"",email:"",password:"",salary:0,address:"",active:true,logged:true,deptNo:0}

  }


  ngOnInit(): void {

    this.labser.GetAllLabs().subscribe(data=>{
      this.LabList=data;
    },error=>alert(error));
    
  }

  btn_labEdit(labId:number):void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flaglabEdit=false;
    }else{
      this.flaglabEdit=true;
    }

   this.labser.GetLabId(labId).subscribe(data=>{
    this.Lab=data;
   },error=>alert(error));

  }


  btn_labDelete(labid:number):void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flaglabDelete=false;
    }else{
      this.flaglabDelete=true;
    }

    this.labser.GetLabId(labid).subscribe(data=>{
      this.Lab=data;

    },error=>alert(error));

  }


  btn_labUpdate():void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flaglabEdit=true;
    }else{
      this.flaglabEdit=false;
    }

    this.Lab.salary=parseInt(this.Lab.salary.toString());
    
    this.labser.UpdateLab(this.Lab).subscribe(data=>{
      alert(data +"Record updated successfully");
    },error=>alert(error));

  }

  btn_labCancel():void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flaglabEdit=true;
    }else{
      this.flaglabEdit=false;
    }


  }

  btn_labDel():void{

  }


  btn_labDelCancel():void{

    let sessionlogval=window.sessionStorage.getItem("login");

    if(sessionlogval==null){
      this.flaglabDelete=true;
    }else{
      this.flaglabDelete=false;
    }

  }

}
