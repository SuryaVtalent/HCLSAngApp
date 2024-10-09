import { Component, OnInit } from '@angular/core';
import { HelperService } from '../Services/helper.service';
import { IHelpers } from '../../Models/IHelpers';

@Component({
  selector: 'app-managehelpers',
  templateUrl: './managehelpers.component.html',
  styleUrl: './managehelpers.component.css'
})
export class ManagehelpersComponent implements OnInit{

  HelperList!:IHelpers[];
  Helper:IHelpers;

  flagHelpEdit:boolean=false;
  flagHelpDelete:boolean=false;


  constructor(private helpser:HelperService){
    this.Helper={helpId:0,name:"",dob:"",doj:"",email:"",phone:"",password:"",salary:0,address:"",active:true,logged:true,assigned:true,deptNo:0}
  }

  ngOnInit(): void {
    this.helpser.GetAllHelpers().subscribe(data=>{
      this.HelperList=data;

    },error=>alert(error)); 
    
  }

  btn_HelpEdit(helpId:number):void{

    let sessionLogval=window.sessionStorage.getItem("login");
    if(sessionLogval==null){
      this.flagHelpEdit=false;
    }else{
      this.flagHelpEdit=true;
    }


    this.helpser.GetHelperId(helpId).subscribe(data=>{
      this.Helper=data;
    },error=>alert(error));
    

  }

  btn_HelpDelete(helpId:number):void{

    let sessionLogval=window.sessionStorage.getItem("login");
    if(sessionLogval==null){
      this.flagHelpDelete=false;
    }else{
      this.flagHelpDelete=true;
    }

    this.helpser.GetHelperId(helpId).subscribe(data=>{
      this.Helper=data;
    },error=>alert(error));
    
  }

  btn_HelpUpdate():void{

    let sessionLogval=window.sessionStorage.getItem("login");
    if(sessionLogval==null){
      this.flagHelpEdit=true;
    }else{
      this.flagHelpEdit=false;
    }



     
    this.Helper.salary=parseInt(this.Helper.salary.toString());


    this.helpser.UpdateHelper(this.Helper).subscribe(data=>{
      alert(data +"Record Updated Successfully");
    },error=>alert(error));

   }

  btn_HelpCancel():void{
    let sessionLogval=window.sessionStorage.getItem("login");
    if(sessionLogval==null){
      this.flagHelpEdit=true;
    }else{
      this.flagHelpEdit=false;
    }

  } 
 

  btn_HelpDelCanc():void{

    let sessionLogval=window.sessionStorage.getItem("login");
    if(sessionLogval==null){
      this.flagHelpDelete=true;
    }else{
      this.flagHelpDelete=false;
    }

    
  }

}
