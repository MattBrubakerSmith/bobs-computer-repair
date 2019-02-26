import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairServiceListingComponent } from './repair-service-listing.component';

describe('RepairServiceListingComponent', () => {
  let component: RepairServiceListingComponent;
  let fixture: ComponentFixture<RepairServiceListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairServiceListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairServiceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
