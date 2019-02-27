import { Component, OnInit } from '@angular/core';
import { BobJob } from '../bobs-services/bob-job';
import { BobJobService } from '../bobs-services/bob-job.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  bobJobService: BobJobService;
  bobJobs: BobJob[];
  selectedJobs: BobJob[] = []; 

  constructor(bobJobService: BobJobService) { 
    this.bobJobService = bobJobService;
    this.bobJobs = bobJobService.getAllBobJobs();
  }

  ngOnInit() {
  }

  addJob(id: number) {
    this.selectedJobs.push(this.bobJobService.getBobJobById(id));
  }
}
