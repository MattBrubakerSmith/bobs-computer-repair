import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromStore from "../store/reducers";
import * as fromServiceRequest from '../store/reducers/service-request.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-employees-only',
  templateUrl: './employees-only.component.html',
  styleUrls: ['./employees-only.component.css']
})
export class EmployeesOnlyComponent implements OnInit {
  serviceRequest$: Observable<fromServiceRequest.ServiceRequest>;

  constructor(private store: Store<fromServiceRequest.ServiceRequest>) { }

  ngOnInit() {
    this.serviceRequest$ = this.store.select(fromStore.selectServiceRequestState);
  }

}
