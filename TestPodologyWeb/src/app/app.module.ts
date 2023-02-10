// Material
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {ScrollingModule} from '@angular/cdk/scrolling'; 
import {MatDividerModule} from '@angular/material/divider'; 

// DevExtreme
import { DxSelectBoxModule, DxTreeViewModule, DxScrollViewModule, DxSchedulerModule } from 'devextreme-angular';

// Modules
import { ApiModule } from './api/api.module';
import { HttpClientModule } from '@angular/common/http';import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { HcpMainComponent } from './components/healthCheckProvider/hcp-main/hcp-main.component';
import { PatientMainComponent } from './components/patient/patient-main/patient-main.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { HcpDashboardComponent } from './components/healthCheckProvider/hcp-dashboard/hcp-dashboard.component';
import { NavAreaComponent } from './components/layout/nav-area/nav-area.component';
import { CustomCardComponent } from './components/layout/custom-card/custom-card.component';
import { HcpPatientsComponent } from './components/healthCheckProvider/hcp-patients/hcp-patients.component';
import { HcpCalendarComponent } from './components/healthCheckProvider/hcp-calendar/hcp-calendar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { HcpConsultationsComponent } from './components/healthCheckProvider/hcp-consultations/hcp-consultations.component';
import { LayoutModule } from './components/layout/layout.module';
import { PatientConsultationsComponent } from './components/patient/consultations/patient-consultations/patient-consultations.component';
import { PatientEditConsultationComponent } from './components/patient/consultations/patient-edit-consultation/patient-edit-consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HcpMainComponent,
    PatientMainComponent,
    PatientDashboardComponent,
    PatientConsultationsComponent,
    PatientEditConsultationComponent,
    HcpDashboardComponent,
    HcpPatientsComponent,
    HcpCalendarComponent,
    HcpConsultationsComponent,
  ],
  imports: [
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:7252' }),
    //ApiModule.forRoot({ rootUrl: 'https://testpodologyapi.azurewebsites.net' }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ScrollingModule,
    MatSidenavModule,
    DxSelectBoxModule,
    DxTreeViewModule,
    DxScrollViewModule,
    DxSchedulerModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
