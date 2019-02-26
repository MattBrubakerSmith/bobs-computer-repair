import { Component, OnInit, Input } from '@angular/core';
import { BobJob } from '../bob-job';

@Component({
  selector: 'app-featured-bob-job',
  templateUrl: './featured-bob-job.component.html',
  styleUrls: ['./featured-bob-job.component.scss']
})
export class FeaturedBobJobComponent implements OnInit {
  @Input() bobJob: BobJob;

  ngOnInit() {
  }

}
