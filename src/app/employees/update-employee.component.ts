import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  activatedRoute: ActivatedRoute;
  private employeeId! : number;
  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }


  ngOnInit(): void {
   
   // this.employeeId = this.activatedRoute.snapshot.params['id'];
   
  }


}

