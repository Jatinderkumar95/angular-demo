import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-reactive-create-employee',
  templateUrl: './reactive-create-employee.component.html',
  styleUrls: ['./reactive-create-employee.component.css']
})
export class ReactiveCreateEmployeeComponent implements OnInit {

  private http: HttpClient;



  gender: string[] = ['abc', 'xyz'];
  employee!: Employee;

  employeeForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(10)]),
    gender: new FormControl('',[Validators.required]), 
    //  new FormControl({value: 'Rahul', disabled: true}),
    preference: new FormControl(),
    // birthDate: new FormControl(),
    // department: new FormControl(),
    // image: new FormControl(),
    // phn: new FormControl(),
    // email: new FormControl(),
    address: new FormGroup({
      line1: new FormControl(),
      zip: new FormControl()
    }),
    // formArray : new FormArray({

    // })
  });

  constructor(http: HttpClient) {
    this.http = http;
  }


  ngOnInit(): void {
    this.populateGender();
  }

  onSubmit(): void {
    console.log(this.employeeForm);
  }
  populateGender(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(map(
      (res: any) => res.title
    )).subscribe({
      next: (res) => {
        this.gender.push(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get name() {
return this.employeeForm.controls['name'];
  }
}

