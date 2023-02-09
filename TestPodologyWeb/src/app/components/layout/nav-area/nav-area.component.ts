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
  constructor(private router: Router) { }
  
  @Input() currentUser: User | undefined

  public navItems: NavItem[] = [];
  ngOnInit(): void {
    
    this.navItems = navItems.filter((x) => x.role.indexOf(this.currentUser?.role as string) !== -1)
  }

  changeSelection(menuItem: NavItem) {
    console.log(menuItem)
    if (menuItem?.items == null || menuItem?.items.length == 0) {
      console.log(menuItem.path)
      this.router.navigate(['/'+menuItem.path]);
    }
    else {
      let item = this.navItems.find(m => m.title == menuItem.title);
      if (item)
        item.isExpanded = !item.isExpanded;
    }
  }

}
