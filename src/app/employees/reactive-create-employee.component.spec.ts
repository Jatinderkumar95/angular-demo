import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCreateEmployeeComponent } from './reactive-create-employee.component';

describe('ReactiveCreateEmployeeComponent', () => {
  let component: ReactiveCreateEmployeeComponent;
  let fixture: ComponentFixture<ReactiveCreateEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveCreateEmployeeComponent]
    });
    fixture = TestBed.createComponent(ReactiveCreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
