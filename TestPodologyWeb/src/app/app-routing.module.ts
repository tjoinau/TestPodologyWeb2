import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { HcpDashboardComponent } from './components/healthCheckProvider/hcp-dashboard/hcp-dashboard.component';
import { HcpMainComponent } from './components/healthCheckProvider/hcp-main/hcp-main.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { PatientMainComponent } from './components/patient/patient-main/patient-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'patient', component: PatientMainComponent, children: [
      { path: 'patient-dashboard', component: PatientDashboardComponent }
    ]
  },
  {
    path: 'healthCheckProvider', component: HcpMainComponent, children: [
      { path: 'hcp-dashboard', component: HcpDashboardComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
