import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.scss']
})
export class PatientMainComponent implements OnInit {
  constructor( private router: Router){}
  
  public currentUser: User | undefined;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(["login"]);
  }

}
