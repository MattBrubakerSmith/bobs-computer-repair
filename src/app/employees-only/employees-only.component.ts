import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromStore from "../store/reducers";
import * as fromServiceRequest from '../store/reducers/service-request.reducer';
import { Store } from '@ngrx/store';
import { BobJob } from '../bobs-services/bob-job';
import { BobJobService } from '../bobs-services/bob-job.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { InvoiceComponent } from './invoice/invoice.component';

@Component({
  selector: 'app-employees-only',
  templateUrl: './employees-only.component.html',
  styleUrls: ['./employees-only.component.css']
})
export class EmployeesOnlyComponent implements OnInit {
  selectedBobJobs: BobJob[];
  serviceRequest$: Observable<fromServiceRequest.ServiceRequest>;
  servicePriceTotal: number;
  partsPrice: FormControl = new FormControl();
  laborPrice: FormControl = new FormControl();
  total: number = 0;
  userData: {
    firstName: string,
    lastName: string,
    email: string
  }

  constructor(
    private store: Store<fromServiceRequest.ServiceRequest>, 
    private bobJobService: BobJobService,
    public invoiceDialog: MatDialog
  ) { }

  ngOnInit() {
    this.serviceRequest$ = this.store.select(fromStore.selectServiceRequestState);
    this.getSelectedBobJobs();
  }

  getSelectedBobJobs() {
    let jobs = [];
    let total = 0;
    this.serviceRequest$.subscribe(data => {
      for(let i = 0; i < data.repairServices.length; i++) {
        if(data.repairServices[i]) {
          let bj = this.bobJobService.getBobJobById(i);
          jobs.push(bj);
          total += bj.price;
        }
      }
      this.selectedBobJobs = jobs;
      this.servicePriceTotal = total;
      this.total = total;
      this.userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email
      }
    });
  }

  calculateTotal() {
    this.total = this.servicePriceTotal + 
                (this.partsPrice.value ? this.partsPrice.value : 0) + 
                (this.laborPrice.value ? this.laborPrice.value : 0);
  }

  viewInvoice() {
    this.invoiceDialog.open(InvoiceComponent, {
      width: "500px",
      data: {
        userData: this.userData,
        bobJobs: this.selectedBobJobs,
        servicePriceTotal: this.servicePriceTotal,
        partsPrice: this.partsPrice.value,
        laborPrice: this.laborPrice.value,
        total: this.total
      }
    });
  }
}
