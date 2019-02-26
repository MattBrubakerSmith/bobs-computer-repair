import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRepairServiceComponent } from './featured-repair-service.component';

describe('FeaturedRepairServiceComponent', () => {
  let component: FeaturedRepairServiceComponent;
  let fixture: ComponentFixture<FeaturedRepairServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedRepairServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedRepairServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
