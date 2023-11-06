import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  {
    path: 'stakeholder',
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[],
  exports: [RouterModule]
})

export class StakeholderDashboardRoutingModule {

}