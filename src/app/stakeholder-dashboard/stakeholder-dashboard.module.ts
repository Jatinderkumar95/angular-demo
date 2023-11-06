import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StakeholderDashboardRoutingModule } from './stakeholder-dashboard-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    StakeholderDashboardRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class StakeholderDashboardModule { }
