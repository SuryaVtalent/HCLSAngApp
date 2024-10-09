import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Services/doctor.service';
import { IDoctor } from '../../Models/IDoctor';
import { error } from 'console';
import { IDocspecid } from '../../Models/IDocSpecid';
import { DocspecidService } from '../Services/docspecid.service';

@Component({
  selector: 'app-managedoctor',
  templateUrl: './managedoctor.component.html',
  styleUrl: './managedoctor.component.css'
})
export class ManagedoctorComponent implements OnInit {

  DocList!:IDoctor[];
  Doc:IDoctor;
  DocspecList!:IDocspecid[];

  flagDocEdit:boolean=false;
  flagDocDelete:boolean=false;


  constructor(private docser:DoctorService,private docspec:DocspecidService){
    this.Doc={docId:0,name:"",dob:"",doj:"",phone:"",email:"",password:"",salary:0,address:"",active:true,logged:true,assigned:true,docSpecId:0,deptNo:0}
  }


  ngOnInit(): void {
 this.docser.GetAllDoc().subscribe(data=>{
  this.DocList=data;
 },error=>alert(error));

 this.docspec.GetAllDocSpecId().subscribe(data=>{
  this.DocspecList=data;
 },error=>alert(error));
    
  }

btn_DocEdit(docId:number):void{

   let sesionlogval=window.sessionStorage.getItem("login");
   if(sesionlogval==null){
    this.flagDocEdit=false;
   }else{
    this.flagDocEdit=true;
   }


  this.docser.GetDocId(docId).subscribe(data=>{
    this.Doc=data;

  },error=>alert(error));

}

btn_DocDelete(docId:number):void{
 
  let sesionlogval=window.sessionStorage.getItem("login");
   if(sesionlogval==null){
    this.flagDocDelete=false;
   }else{
    this.flagDocDelete=true;
   }



  this.docser.GetDocId(docId).subscribe(data=>{
    this.Doc=data;
  },error=>alert(error));



}

btn_DocUpdate():void{

  this.Doc.salary=parseInt(this.Doc.salary.toString());

 this.docser.UpdateDoc(this.Doc).subscribe(data=>{
  alert(data +"Update successfully");
 },error=>alert(error));
}

btn_DocCancel():void{

  let sesionlogval=window.sessionStorage.getItem("login");
   if(sesionlogval==null){
    this.flagDocEdit=true;
   }else{
    this.flagDocEdit=false;
   }

}



btn_DocDel():void{
// this.docser.DeleteDoc(docId).subscribe(data=>{
//   alert(data +"Record Deleted Successfully");
// },error=>alert(error));
}

btn_DocDelCancel():void{

  let sesionlogval=window.sessionStorage.getItem("login");
   if(sesionlogval==null){
    this.flagDocDelete=true;
   }else{
    this.flagDocDelete=false;
   }

}

}
