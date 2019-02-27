import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedBobJobComponent } from './featured-bob-job/featured-bob-job.component';
import { BobJobService } from './bob-job.service';
import { MatIconModule, MatCardModule, MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [
    FeaturedBobJobComponent
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
    CommonModule
  ]
})
export class BobsServicesModule { }
