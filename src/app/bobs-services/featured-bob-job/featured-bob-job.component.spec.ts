import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBobJobComponent } from './featured-bob-job.component';

describe('FeaturedBobJobComponent', () => {
  let component: FeaturedBobJobComponent;
  let fixture: ComponentFixture<FeaturedBobJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedBobJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBobJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
