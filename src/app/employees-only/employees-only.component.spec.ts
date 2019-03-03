import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { EmployeesOnlyComponent } from './employees-only.component';

describe('EmployeesOnlyComponent', () => {
  let component: EmployeesOnlyComponent;
  let fixture: ComponentFixture<EmployeesOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesOnlyComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
