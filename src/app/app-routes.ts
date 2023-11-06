import { Route, Routes } from "@angular/router";
import { ListEmployeesComponent } from "./employees/list-employees.component";
import { ErrorComponent } from "./error/error.component";
import { UpdateEmployeeComponent } from "./employees/update-employee.component";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { ReactiveCreateEmployeeComponent } from "./employees/reactive-create-employee.component";

export const routes : Routes = [
  {path:'admin', loadChildren:()=>import('./admin-dashboard/admin-dashboard.module').then(m=>m.AdminDashboardModule),data:{preload:true,delay:4000},canLoad:[AuthGuardService]},
  // {path: "admin", loadChildren:'./admin/admin.module#AdminModule'} upto angular 7,
  { path: 'list', component: ListEmployeesComponent},
  { path: 'create', component: ReactiveCreateEmployeeComponent},
  { path: 'update/:id',component:UpdateEmployeeComponent },
  { path: '', redirectTo: 'create', pathMatch: 'full' },

  {path:'**',component:ErrorComponent}
] ;