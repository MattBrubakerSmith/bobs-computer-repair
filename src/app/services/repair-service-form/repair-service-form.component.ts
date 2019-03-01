import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef } from "@angular/material";
import { BobJobService } from "../../bobs-services/bob-job.service";
import { BobJob } from 'src/app/bobs-services/bob-job';

@Component({
  selector: 'app-repair-service-form',
  templateUrl: './repair-service-form.component.html',
  styleUrls: ['./repair-service-form.component.scss']
})
export class RepairServiceFormComponent implements OnInit {
  bobJobs: BobJob[];
  form: FormGroup;

  constructor(bobJobService: BobJobService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RepairServiceFormComponent>) { 
    this.bobJobs = bobJobService.getAllBobJobs();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      repairServices: new FormArray([])
    });

    this.addCheckboxes();
  }

  addCheckboxes() {
    this.bobJobs.map((bj, i) => {
      const control = new FormControl(false);
      (this.form.controls.repairServices as FormArray).push(control);
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.dialogRef.close();
  }
}
