import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/models/nav-item';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-hcp-main',
  templateUrl: './hcp-main.component.html',
  styleUrls: ['./hcp-main.component.scss']
})
export class HcpMainComponent implements OnInit {

  constructor(private router: Router) { }

  public currentUser: User | undefined;
  showFiller = false;
  public navItems: NavItem[] = [];

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);

    console.log(this.navItems)
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(["login"]);
  }




  









  // open(key: any) {
  //   if (key.itemData.isExpanded == true) {
  //     this.collapseNode(key);
  //   }
  //   else {
  //     this.expandNode(key)
  //   }
  // }

  // private expandNode(key: any) {
  //   console.log(key)
  //   this.treeView?.instance.expandItem(key.node.key);
  // }
  // private collapseNode(key: any) {
  //   console.log(key)
  //   this.treeView?.instance.collapseItem(key.node.key);
  // }

}
