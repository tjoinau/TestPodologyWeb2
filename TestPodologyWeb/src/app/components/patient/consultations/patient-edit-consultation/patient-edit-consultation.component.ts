import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AvailableDatesDto, HealthCareProviderDto, LocationDto, NewConsultationDto } from 'src/app/api/models';
import { ConsultationService, HealthCareProviderService, LocationService } from 'src/app/api/services';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-patient-edit-consultation',
  templateUrl: './patient-edit-consultation.component.html',
  styleUrls: ['./patient-edit-consultation.component.scss']
})
export class PatientEditConsultationComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;

  xxx = true;

  constructor(private router: Router,
    private consultationService: ConsultationService, 
    private locationService: LocationService, 
    private snackBar: MatSnackBar,
    private healthCareProviderService: HealthCareProviderService) { }

  connectedUser: User | undefined;
  private subs: Subscription[] = [];
  availableDates: AvailableDatesDto[] = [];
  availableLocations: LocationDto[] = [];
  healthCheckProviders: HealthCareProviderDto[] = [];
  selectedHealthCheckProvider: HealthCareProviderDto | undefined;
  selectedLocation: LocationDto | undefined;
  patientNote: string = '';

  public step1Form: FormGroup = new FormGroup({
    location: new FormControl(null, [Validators.required]),
    patientId: new FormControl(),
    doctorId: new FormControl()
  });

  public step2Form: FormGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
  });

  public step3Form: FormGroup = new FormGroup({
    notes: new FormControl([]),
  });

  selectedSlot = "";


  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem('currentUser') as string);

    this.subs.push(this.healthCareProviderService.apiHealthCareProviderGet$Json().subscribe({
      next: (data) => {
        this.healthCheckProviders = data;
      }
    }));

    this.step1Form.patchValue({
      patientId: this.connectedUser?.id
    })
    
    
  }

  postNewConsultation(){

    var newConsultationDto : NewConsultationDto = {
      patientId : this.step1Form.get('patientId')?.value,
      healthCareProviderId : this.step1Form.get('doctorId')?.value.id,
      locationId : this.step1Form.get('location')?.value.id,
      startConsultation : this.step2Form.get('date')?.value,
      patientInput : this.step3Form.get('notes')?.value
    }
    console.log(newConsultationDto)

    this.subs.push(this.consultationService.apiConsultationPost$Json({body : newConsultationDto}).subscribe({
      next: (value) => {
        console.log('consultation bien enregistrée')
        console.log(value)

        this.openSnackBar('consultation bien enregistrée')

        this.router.navigate(["/patient/dashboard"]);
      },
      error: (err) => {
        console.warn(err)
      }
    }))

    // console.log(newConsultationDto);
  }

  SelectHCP(selectedHCP: HealthCareProviderDto| undefined){
    this.subs.push(this.locationService.apiLocationGet$Json({DoctorId: selectedHCP?.id as string})
    .subscribe({
      next : (locations) => {
        this.availableLocations = locations
      },
      error(err) {
        console.warn(err);
      }
    }))
  }

  SelectLocation(location: LocationDto | undefined) {
    this.subs.push(this.consultationService.apiConsultationGetFirstsAvailableDatesGet$Json({LocationId : location?.id})
    .subscribe({
      next : (dates) => {
        this.availableDates = dates

        console.log(this.availableDates)
      },
      error(err) {
        console.warn(err);
      }
    }))
  }

  selectSlot(slot: any){
    this.selectedSlot = slot;
    this.step2Form.patchValue({
      date: slot
    });

    this.accordion?.closeAll()
  }

  openSnackBar(message: string){
    this.snackBar.open(message, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
