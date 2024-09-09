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
    ManageroaadminComponent
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
