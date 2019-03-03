import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

import { FeaturedBobJobComponent } from './featured-bob-job.component';

describe('FeaturedBobJobComponent', () => {
  let component: FeaturedBobJobComponent;
  let fixture: ComponentFixture<FeaturedBobJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedBobJobComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBobJobComponent);
    component = fixture.componentInstance;
    component.bobJob = {
      id:100,
      name: "name",
      type: "type",
      url: "url",
      description: "desc",
      icon: "icon",
      price: 1
    };
    fixture.detectChanges();
  });

  it('should display a US dollar symbol in front of price', () => {
    expect(fixture.debugElement.query(By.css(".bobjob-price")).nativeElement.innerHTML.charAt(0)).toEqual("$");
  });
});
