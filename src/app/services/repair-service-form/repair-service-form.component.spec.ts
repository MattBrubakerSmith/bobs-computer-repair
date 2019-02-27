import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairServiceFormComponent } from './repair-service-form.component';

describe('RepairServiceFormComponent', () => {
  let component: RepairServiceFormComponent;
  let fixture: ComponentFixture<RepairServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
