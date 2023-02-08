import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { navItems } from './nav-items';

@Component({
  selector: 'app-hcp-main',
  templateUrl: './hcp-main.component.html',
  styleUrls: ['./hcp-main.component.scss']
})
export class HcpMainComponent implements OnInit {
  constructor( private router: Router){}

  public currentUser: User | undefined;
  showFiller = false;
  public navItems: any[] = [];

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);

    this.navItems = navItems.filter((x) => x.role.indexOf(this.currentUser?.role as string) !== -1)

    console.log(this.navItems)
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(["login"]);
  }

}
