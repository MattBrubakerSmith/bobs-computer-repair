import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatDialogRef,  } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { Store } from "@ngrx/store";
import { By } from "@angular/platform-browser";

import { RepairServiceFormComponent } from './repair-service-form.component';

describe('RepairServiceFormComponent', () => {
  let component: RepairServiceFormComponent;
  let fixture: ComponentFixture<RepairServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairServiceFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCheckboxModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Store, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have seven checkboxes', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let checkboxes = fixture.debugElement.queryAll(By.css("mat-checkbox"));
      expect(checkboxes.length).toEqual(7);
    });
  });
});
