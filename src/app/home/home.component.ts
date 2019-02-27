import { Component, OnInit } from '@angular/core';
import { BobJobService } from '../bobs-services/bob-job.service';
import { BobJob } from "../bobs-services/bob-job";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    BobJobService
  ]
})
export class HomeComponent implements OnInit {
  bobJob: BobJob;

  constructor(bobJobService: BobJobService) { 
    this.bobJob = bobJobService.getBobJobById(Math.floor(Math.random() * 7));
  }

  ngOnInit() {
  }

}
