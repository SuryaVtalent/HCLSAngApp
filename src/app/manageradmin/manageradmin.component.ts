import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageradmin',
  templateUrl: './manageradmin.component.html',
  styleUrl: './manageradmin.component.css'
})
export class ManageradminComponent implements OnInit {

 constructor(private router:Router){}

  ngOnInit(): void {

    let sessionLogval=window.sessionStorage.getItem("login");
    if(sessionLogval==null){
      this.router.navigate(["login"]).then(()=>{
        window.location.reload();
      })

    }
  
    
  }

}
