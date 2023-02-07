import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HealthCareProviderService, PatientService } from 'src/app/api/services';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public patientUsers: User[] = [];
  public hcpUsers: User[] = [];
  public UsersItems: User[] = [];
  public UsersItem: User | undefined;
  private sub: Subscription[] = [];


  constructor(private patientService: PatientService, 
    private hcpService: HealthCareProviderService, 
    private router: Router){}

  ngOnInit(): void {
    this.sub.push(this.patientService.apiPatientGet$Json().subscribe({
      next: (data) => {
        this.patientUsers = [];
        data.forEach(x => {
          this.patientUsers.push({
            id : x.id as string,
            firstName: x.firstName as string,
            lastName: x.lastName as string,
            role: Role.patient,
            username: x.firstName + ' ' + x.lastName
          })
        })
      }
    }));

    this.sub.push(this.hcpService.apiHealthCareProviderGet$Json().subscribe({
      next: (data) => {
        this.hcpUsers = [];
        data.forEach(x => {
          this.hcpUsers.push({
            id : x.id as string,
            firstName: x.firstName as string,
            lastName: x.lastName as string,
            role: Role.hcp,
            username: 'Dr ' + x.lastName
          })
        })
      }
    }));
  }

  hcpSet(){
    this.UsersItem = undefined;
    this.UsersItems = this.hcpUsers
  }

  patientSet(){
    this.UsersItem = undefined;
    this.UsersItems = this.patientUsers
  }

  test(a: any){
    console.log(a)
  }

  login(){
    localStorage.setItem('currentUser', JSON.stringify(this.UsersItem));
    
    if(this.UsersItem?.role == Role.hcp){
      this.router.navigate(["hcp-mainPage/hcp-dashboard"]);
    }
    else{
      this.router.navigate(["/patient-mainPage/patient-dashboard"]);
    }

  }

}
