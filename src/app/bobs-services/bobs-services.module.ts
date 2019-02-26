import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedRepairServiceComponent } from './featured-repair-service/featured-repair-service.component';
import { RepairServiceListingComponent } from './repair-service-listing/repair-service-listing.component';

@NgModule({
  declarations: [
    FeaturedRepairServiceComponent,
    RepairServiceListingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BobsServicesModule { }
