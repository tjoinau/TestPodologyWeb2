import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/models/nav-item';
import { User } from 'src/app/models/user';
import { navItems } from './nav-items';

@Component({
  selector: 'app-nav-area',
  templateUrl: './nav-area.component.html',
  styleUrls: ['./nav-area.component.scss']
})
export class NavAreaComponent implements OnInit{
  @Input() currentUser: User | undefined

  constructor(private router: Router) { }
  
  public selectedMenu?: string;
  public navItems: NavItem[] = [];
  ngOnInit(): void {
    let urlParts = this.router.url.split('/');
    this.selectedMenu = urlParts[urlParts.length - 1];
    this.navItems = navItems.filter((x) => x.role.indexOf(this.currentUser?.role as string) !== -1)
  }

  changeSelection(menuItem: NavItem) {
    this.selectedMenu = menuItem.routerLink;
    if (menuItem?.items == null || menuItem?.items.length == 0) {
      this.router.navigate(['/'+menuItem.path]);
    }
    else {
      let item = this.navItems.find(m => m.title == menuItem.title);
      if (item)
        item.isExpanded = !item.isExpanded;
    }
  }

}
