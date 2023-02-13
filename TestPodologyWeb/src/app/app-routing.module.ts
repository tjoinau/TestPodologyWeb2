import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { HcpCalendarComponent } from './components/healthCheckProvider/hcp-calendar/hcp-calendar.component';
import { HcpConsultationsComponent } from './components/healthCheckProvider/hcp-consultations/hcp-consultations.component';
import { HcpDashboardComponent } from './components/healthCheckProvider/hcp-dashboard/hcp-dashboard.component';
import { HcpMainComponent } from './components/healthCheckProvider/hcp-main/hcp-main.component';
import { HcpPatientsComponent } from './components/healthCheckProvider/hcp-patients/hcp-patients.component';
import { PatientConsultationsComponent } from './components/patient/consultations/patient-consultations/patient-consultations.component';
import { PatientEditConsultationComponent } from './components/patient/consultations/patient-edit-consultation/patient-edit-consultation.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { PatientMainComponent } from './components/patient/patient-main/patient-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'patient', component: PatientMainComponent, children: [
      { path: 'dashboard', component: PatientDashboardComponent },
      { path: 'consultations', component: PatientConsultationsComponent },
      { path: 'editconsultations', component: PatientEditConsultationComponent }
    ]
  },
  {
    path: 'healthCheckProvider', component: HcpMainComponent, children: [
      { path: 'dashboard', component: HcpDashboardComponent },
      { path: 'patients', component: HcpPatientsComponent },
      { path: 'calendar', component: HcpCalendarComponent },
      { path: 'consultations', component: HcpConsultationsComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
