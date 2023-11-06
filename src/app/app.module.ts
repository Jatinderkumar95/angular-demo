import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { TestPipe } from './pipes/test.pipe';
import { TempConvertorPipe } from './pipes/temp-convertor.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { UpdateEmployeeComponent } from './employees/update-employee.component';
import { ErrorComponent } from './error/error.component';
import { routes } from './app-routes';
import { HttpService } from './services/http.service';
import { CustomPreloading } from './preLoading-Stretagy';
import { StakeholderDashboardModule } from './stakeholder-dashboard/stakeholder-dashboard.module';
import { AuthGuardService } from './services/auth-guard.service';
import { LocalStorageService } from './services/local-storage.service';
import { ReactiveCreateEmployeeComponent } from './employees/reactive-create-employee.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{preloadingStrategy: CustomPreloading}),
    // PreloadAllModules
    FormsModule,
    StakeholderDashboardModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    TestPipe,
    TempConvertorPipe,
    FilterArrayPipe,
    UpdateEmployeeComponent,
    ErrorComponent,
    ReactiveCreateEmployeeComponent
  ],
  providers:[
    HttpService,
    CustomPreloading,
    AuthGuardService,
    LocalStorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/