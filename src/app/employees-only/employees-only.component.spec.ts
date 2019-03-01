import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesOnlyComponent } from './employees-only.component';

describe('EmployeesOnlyComponent', () => {
  let component: EmployeesOnlyComponent;
  let fixture: ComponentFixture<EmployeesOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
