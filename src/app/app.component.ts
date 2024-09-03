import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Models/Admin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'HCLSAngApp';
  
  flagAnony:boolean=true; //Default
  flagSecure:boolean=false;
  flagSecMg:boolean=false;
  flagSecOp:boolean=false;

  constructor(private router:Router){}

  ngOnInit(): void {
    
    
   let sessionLogVal= window.sessionStorage.getItem("login"); 
   if(sessionLogVal==null){
    this.flagAnony=true;
    this.flagSecure=false;
    

   }
   else{
    this.flagAnony=false;
    this.flagSecure=true;
    
     
    let sessionAdmtype=window.sessionStorage.getItem("adminType");

    if(sessionAdmtype=="10"){
      this.flagSecMg=true;
      this.flagSecOp=false;
     this.router.navigate(["manageradmin"]);
    }
    else{
      this.flagSecMg=false;
      this.flagSecOp=true;
     this.router.navigate(["operation"]);
      
      
      
    }
   }
   
  }

  btn_LogoutClick():void{
    window.sessionStorage.removeItem("login");
    window.sessionStorage.removeItem("adminType");
    window.sessionStorage.clear();
    this.router.navigate(["login"]).then(()=>{
      window.location.reload();
    });
  }


}
