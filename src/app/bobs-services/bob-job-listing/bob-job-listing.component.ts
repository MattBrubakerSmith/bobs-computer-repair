import { Component, OnInit, Input } from '@angular/core';
import { BobJob } from '../bob-job';

@Component({
  selector: 'app-bob-job-listing',
  templateUrl: './bob-job-listing.component.html',
  styleUrls: ['./bob-job-listing.component.scss']
})
export class BobJobListingComponent implements OnInit {
  @Input() bobJob: BobJob; 

  constructor() { }

  ngOnInit() {
  }

}
