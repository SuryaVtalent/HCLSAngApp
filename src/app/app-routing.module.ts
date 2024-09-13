import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageradminregistrationComponent } from './manageradminregistration/manageradminregistration.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ManageradminComponent } from './manageradmin/manageradmin.component';
import { OperationaladminComponent } from './operationaladmin/operationaladmin.component';
import { ActiveComponent } from './active/active.component';
import { AddoaadminComponent } from './addoaadmin/addoaadmin.component';
import { ManageroaadminComponent } from './manageroaadmin/manageroaadmin.component';
import { AddhospitalemployeesComponent } from './addhospitalemployees/addhospitalemployees.component';
import { ManagehospitalemployeesComponent } from './managehospitalemployees/managehospitalemployees.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { HelpersComponent } from './helpers/helpers.component';
import { LabsComponent } from './labs/labs.component';
import { ManagereceptionistComponent } from './managereceptionist/managereceptionist.component';
import { ManagedoctorComponent } from './managedoctor/managedoctor.component';
import { ManagehelpersComponent } from './managehelpers/managehelpers.component';
import { ManagelabsComponent } from './managelabs/managelabs.component';

const routes: Routes = [

  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:ManageradminregistrationComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"manageradmin",component:ManageradminComponent},
  {path:"operation",component:OperationaladminComponent},
  {path:"addOA",component:AddoaadminComponent},
  {path:"managerOA",component:ManageroaadminComponent},
  {path:"addHospEmp",component:AddhospitalemployeesComponent,
    children:[
      {path:"",redirectTo:"addHospEmp",pathMatch:'full'},
      {path:"addRec",component:ReceptionistComponent},
      {path:"addDoc",component:AddDoctorComponent},
      {path:"addhelpers",component:HelpersComponent},
      {path:"addlabs",component:LabsComponent}
    ]
     },

  {path:"manHospEmp",component:ManagehospitalemployeesComponent,
    children:[
      {path:"",redirectTo:"manHospEmp",pathMatch:'full'},
      {path:"manageRec",component:ManagereceptionistComponent},
      {path:"manageDoc",component:ManagedoctorComponent},
      {path:"manageHelpers",component:ManagehelpersComponent},
      {path:"manageLabs",component:ManagelabsComponent}
    
    ]

  },
  {path:"active",component:ActiveComponent},
  {path:"**",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
