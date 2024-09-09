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
  {path:"active",component:ActiveComponent},
  {path:"**",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
