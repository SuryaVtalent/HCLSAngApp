import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageradminregistrationComponent } from './manageradminregistration/manageradminregistration.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminService } from './Services/admin.service';
import { AdmintypeService } from './Services/admintype.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManageradminregistrationComponent,
    AboutusComponent,
    ContactusComponent,
    ManageradminComponent,
    OperationaladminComponent,
    ActiveComponent,
    AddoaadminComponent,
    ManageroaadminComponent,
    AddhospitalemployeesComponent,
    ManagehospitalemployeesComponent,
    ReceptionistComponent,
    AddDoctorComponent,
    HelpersComponent,
    LabsComponent,
    ManagereceptionistComponent,
    ManagedoctorComponent,
    ManagehelpersComponent,
    ManagelabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AdmintypeService,
    AdminService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
