import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Admin } from '../../Models/Admin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

AdminList!:Admin[];
  constructor(private admins:AdminService){}

  ngOnInit(): void {
    this.admins.GetAll().subscribe(data=>{
      this.AdminList=data;
      console.log(data);
    },error=>alert(error));
    
  }

}
