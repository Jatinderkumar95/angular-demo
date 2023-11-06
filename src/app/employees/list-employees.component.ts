import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  private id: number = 1;
  searchBy! : string;
  searchBy$ : BehaviorSubject<string> = new BehaviorSubject<string>('');

  // private nu :number = Number.NaN;
  employeesOrignal: Employee[] = [
    new Employee(1, 'Mary', 'Female', 'email', new Date('11/20/1994'), 'HR', true, 'mary@gmail.com', undefined, 'assets/images/mary.jpeg'),
    new Employee(2, 'John', 'Male', 'phone', new Date('11/20/1997'), 'IT', true, undefined, 0.034579987, 'assets/images/john.jpeg'),
    new Employee(3, 'Bin', 'Male', 'phone', new Date('11/20/1999'), 'IT', true, undefined, 45645645, 'assets/images/bin.jpeg')
  ]
  employees: Employee[]
  currentEmployeeName!: string;
  constructor() {
    this.employees = Object.assign([],this.employeesOrignal);
    this.searchBy$.asObservable().subscribe(data=>console.log(data),errors => console.log(errors));
    
    fromEvent(document,'')

    // this.employees = [...this.employeesOrignal];
    // this.employees = this.employeesOrignal.slice();
    //.filter(a => a.id == this.id);
  }
  ngOnInit() {

  }
  nextEmployee(): void {
    this.id = this.id >= 3 ? 1 : this.id + 1;
    console.log(this.id);
    this.employees = this.employeesOrignal.filter(a => a.id == this.id);
    console.log(this.employees[0]);
  }

  handleNotification(eventPayload: string) {
    this.currentEmployeeName = eventPayload;
  }

  modelChange(event : any){

  }

  
  

//   ChangeProperty(){
// this.employees[0].name="test";
// this.employees =this.employees.concat([new Employee(10,'majha','Female','email',new Date('10/09/2000'),'HR',true)]);
// console.log(this.employees);
//   }

//   ChangeReference(){
// this.id = 1;
//   }


}
