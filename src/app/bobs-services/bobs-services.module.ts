import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedBobJobComponent } from './featured-bob-job/featured-bob-job.component';
import { BobJobListingComponent } from './bob-job-listing/bob-job-listing.component';
import { BobJobService } from './bob-job.service';
import { MatIconModule, MatCardModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [
    FeaturedBobJobComponent,
    BobJobListingComponent
  ],
  providers: [
    BobJobService
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    FeaturedBobJobComponent,
    BobJobListingComponent,
    CommonModule
  ]
})
export class BobsServicesModule { }
