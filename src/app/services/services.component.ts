import { Component } from '@angular/core';
import { BobJob } from '../bobs-services/bob-job';
import { BobJobService } from '../bobs-services/bob-job.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  bobJobService: BobJobService;
  bobJobs: BobJob[];
  repairServices: FormGroup;

  constructor(bobJobService: BobJobService) { 
    this.bobJobService = bobJobService;
    this.bobJobs = bobJobService.getAllBobJobs();
  }

  onSubmit(formData) {
    console.log(formData)
  }
}
