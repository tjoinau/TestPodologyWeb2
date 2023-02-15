import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultationDto, EUserType } from 'src/app/api/models';
import { ConsultationService } from 'src/app/api/services';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss']
})
export class PatientDashboardComponent implements OnInit {
  constructor(private consultationService: ConsultationService){}
  
  connectedUser: User | undefined;
  subs: Subscription[] = [];
  consultationDtos: ConsultationDto[] = [];
  
  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem('currentUser') as string);
    this.subs.push(this.consultationService.apiConsultationGet$Json({PatientId: this.connectedUser?.id, UserType: EUserType.Patient}).subscribe({
      next: (data) => {
        this.consultationDtos = data.filter(x => new Date(x.startConsultation as string) > new Date()) as ConsultationDto[];

        console.log(this.consultationDtos)
      },
      error: (error) => {
        console.warn(error);
      }
    }))
  }
}
