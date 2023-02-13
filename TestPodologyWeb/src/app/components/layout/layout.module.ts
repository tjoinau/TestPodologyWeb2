import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavAreaComponent } from './nav-area/nav-area.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { DxSchedulerModule, DxScrollViewModule, DxSelectBoxModule, DxTreeViewModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    NavAreaComponent,
    CustomCardComponent,],
  imports: [
    HttpClientModule,
    DxSelectBoxModule,
    DxTreeViewModule,
    DxScrollViewModule,
    DxSchedulerModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    NavAreaComponent,
    CustomCardComponent
  ]
})
export class LayoutModule { }
