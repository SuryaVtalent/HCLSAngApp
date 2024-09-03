import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operationaladmin',
  templateUrl: './operationaladmin.component.html',
  styleUrl: './operationaladmin.component.css'
})
export class OperationaladminComponent implements OnInit{


  constructor(private router:Router){}

  ngOnInit(): void {
   let sessionLogVal= window.sessionStorage.getItem("login");
   if(sessionLogVal==null){
    this.router.navigate(["login"]).then(()=>{
    window.location.reload();
    });
   }
  }
}
