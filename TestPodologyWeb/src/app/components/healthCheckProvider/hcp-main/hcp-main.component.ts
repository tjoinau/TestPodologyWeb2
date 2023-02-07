import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-hcp-main',
  templateUrl: './hcp-main.component.html',
  styleUrls: ['./hcp-main.component.scss']
})
export class HcpMainComponent implements OnInit {
  constructor( private router: Router){}

  public currentUser: User | undefined;
  showFiller = false;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(["login"]);
  }

}
