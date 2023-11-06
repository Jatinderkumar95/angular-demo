import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../models/employee.model";

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterArrayPipe implements PipeTransform {

  transform(employees: Employee[], searchBy: string) {
    console.log('test by filter');
    if (!searchBy || !employees)
      return employees;
    return employees.filter(employee => employee.name.toLowerCase().indexOf(searchBy) != -1);
  }
}