import { Component } from '@angular/core';
import { BobJob } from '../bobs-services/bob-job';
import { BobJobService } from '../bobs-services/bob-job.service';
import { MatDialog } from '@angular/material';
import { RepairServiceFormComponent } from './repair-service-form/repair-service-form.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  bobJobs: BobJob[];

  constructor(bobJobService: BobJobService, public formDialog: MatDialog) { 
    this.bobJobs = bobJobService.getAllBobJobs();
  }

  openFormDialog(): void {
    this.formDialog.open(RepairServiceFormComponent, {
      width: "500px"
    });
  }
}
