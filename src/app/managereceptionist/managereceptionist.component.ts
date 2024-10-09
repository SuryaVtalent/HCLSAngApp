import { Component, OnInit } from '@angular/core';
import { ReceptionService } from '../Services/reception.service';
import { IReception } from '../../Models/IReception';
import { Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-managereceptionist',
  templateUrl: './managereceptionist.component.html',
  styleUrl: './managereceptionist.component.css'
})
export class ManagereceptionistComponent implements OnInit {


  RecpList!:IReception[];
  recp:IReception;


  flagRecEdit:boolean=false;
  flagRecDelete:boolean=false;
  

  constructor(private recser:ReceptionService,private router:Router){
    this.recp={recpId:0,name:"",dob:"",doj:"",email:"",phone:"",password:"",salary:0,address:"",active:true,logged:true,deptNo:0}
  }

  ngOnInit(): void {
   this.recser.GetAllReception().subscribe(data=>{
    this.RecpList=data;
   },error=>alert(error)); 
  }

  btn_RecpEdit(recpId:number):void{
   
    let sessionlogVal=window.sessionStorage.getItem("login");

    if(sessionlogVal==null){
      this.flagRecEdit=false;
    }else{
      this.flagRecEdit=true;
    
    }

    this.recp.salary=parseInt(this.recp.salary.toString());


    this.recser.GetRecById(recpId).subscribe(data=>{
      this.recp=data;
    },error=>alert(error));
    
  }


  btn_RecpDelete(recpId:number):void{

    let sessionlogVal=window.sessionStorage.getItem("login");

    if(sessionlogVal==null){
      this.flagRecDelete=false;
    }else{
      this.flagRecDelete=true;
    
    }


    this.recser.GetRecById(recpId).subscribe(data=>{
      this.recp=data;
    },error=>alert(error));

  }

  

  btn_UpdateRecp():void{

    let sessionlogVal=window.sessionStorage.getItem("login");

    if(sessionlogVal==null){
      this.flagRecEdit=true;
    }else{
      this.flagRecEdit=false;
    }

   this.recser.UpdateReception(this.recp).subscribe(data=>{
    alert(data + "Record Succesfully");
   },error=>alert(error));
  }

  btn_CancelRecp():void{
    let sessionlogVal=window.sessionStorage.getItem("login");

    if(sessionlogVal==null){
      this.flagRecEdit=true;
    }else{
      this.flagRecEdit=false;
    }
  
  }

  btn_DeleteRecp():void{
   
    

  }


  btn_DelCancelRecp():void{
 
    let sessionlogVal=window.sessionStorage.getItem("login");

    if(sessionlogVal==null){
      this.flagRecDelete=true;
    }else{
      this.flagRecDelete=false;
    
    }

    



  }

}
