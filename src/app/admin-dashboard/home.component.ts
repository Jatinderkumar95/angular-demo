import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

ngOnInit(): void {
// console.log(this.homeFormGroup);
}

  homeFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email : new FormControl(),
    gender : new FormControl(),
    isMarried : new FormControl(),
    country : new FormControl(),
    address: new FormGroup({})
  })



  onSubmit(){
    debugger;
    console.log(this.homeFormGroup.value);
  }
}
