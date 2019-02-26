import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedBobJobComponent } from './featured-bob-job/featured-bob-job.component';
import { BobJobListingComponent } from './bob-job-listing/bob-job-listing.component';
import { BobJobService } from './bob-job.service';

@NgModule({
  declarations: [
    FeaturedBobJobComponent,
    BobJobListingComponent
  ],
  providers: [
    BobJobService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeaturedBobJobComponent,
    BobJobListingComponent,
    CommonModule
  ]
})
export class BobsServicesModule { }
