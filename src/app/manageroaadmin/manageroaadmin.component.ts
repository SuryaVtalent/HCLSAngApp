import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Admin } from '../../Models/Admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageroaadmin',
  templateUrl: './manageroaadmin.component.html',
  styleUrl: './manageroaadmin.component.css'
})
export class ManageroaadminComponent implements OnInit {

 AdmList!:Admin[];

  constructor(private admser:AdminService,private router:Router){}


  ngOnInit(): void {
    this.admser.GetAll().subscribe(data=>{
    
      this.AdmList=data;
      

      console.log(data);
    },error=>alert(error));


    let sessionlogVal=window.sessionStorage.getItem("login");
    if(sessionlogVal==null){
      this.router.navigate(["login"]).then(()=>{
        window.location.reload();
      });
    }
    
  }

  btn_EditClk():void{
  
  }

  btn_DeleteClk():void{

  }



}
