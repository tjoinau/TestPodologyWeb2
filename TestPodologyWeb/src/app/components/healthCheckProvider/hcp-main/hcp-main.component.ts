import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxTreeViewComponent } from 'devextreme-angular';
import { dxTreeViewItem } from 'devextreme/ui/tree_view';
import { NavItem } from 'src/app/models/nav-item';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { navItems } from './nav-items';

@Component({
  selector: 'app-hcp-main',
  templateUrl: './hcp-main.component.html',
  styleUrls: ['./hcp-main.component.scss']
})
export class HcpMainComponent implements OnInit {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent | undefined;

  constructor(private router: Router) { }

  public currentUser: User | undefined;
  showFiller = false;
  public navItems: NavItem[] = [];

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);

    this.navItems = navItems.filter((x) => x.role.indexOf(this.currentUser?.role as string) !== -1)

    console.log(this.navItems)
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(["login"]);
  }

  open(key: any) {
    if (key.itemData.isExpanded == true) {
      this.collapseNode(key);
    }
    else {
      this.expandNode(key)
    }
  }

  private expandNode(key: any) {
    console.log(key)
    this.treeView?.instance.expandItem(key.node.key);
  }
  private collapseNode(key: any) {
    console.log(key)
    this.treeView?.instance.collapseItem(key.node.key);
  }

}
