import { Component } from '@angular/core';
import { BobJob } from '../bobs-services/bob-job';
import { BobJobService } from '../bobs-services/bob-job.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  bobJobService: BobJobService;
  bobJobs: BobJob[];

  constructor(bobJobService: BobJobService) { 
    this.bobJobService = bobJobService;
    this.bobJobs = bobJobService.getAllBobJobs();
  }
}
