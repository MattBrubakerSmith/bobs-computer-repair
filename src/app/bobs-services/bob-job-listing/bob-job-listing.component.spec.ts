import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobJobListingComponent } from './bob-job-listing.component';

describe('BobJobListingComponent', () => {
  let component: BobJobListingComponent;
  let fixture: ComponentFixture<BobJobListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobJobListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobJobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
