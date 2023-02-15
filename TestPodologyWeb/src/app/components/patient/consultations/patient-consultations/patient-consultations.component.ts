import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ConsultationDto, EUserType } from 'src/app/api/models';
import { ConsultationService } from 'src/app/api/services';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-patient-consultations',
  templateUrl: './patient-consultations.component.html',
  styleUrls: ['./patient-consultations.component.scss']
})
export class PatientConsultationsComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatTableDataSourcePaginator | undefined;
  
  constructor(private consultationService: ConsultationService){}

  dataSource = new MatTableDataSource<ConsultationDto>();
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator as MatTableDataSourcePaginator;
  }
  connectedUser: User | undefined;
  subs: Subscription[] = [];
  displayedColumns: string[] = ['locationId', 'Date', 'Hcp-name'];

  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem('currentUser') as string);
    this.subs.push(this.consultationService.apiConsultationGet$Json({PatientId: this.connectedUser?.id, UserType: EUserType.Patient}).subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<ConsultationDto>(data);
      },
      error: (error) => {
        console.warn(error);
      }
    }))
  }

}
