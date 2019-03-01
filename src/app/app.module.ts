import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatDividerModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatDialog, MatDialogModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

import { BobsServicesModule } from "./bobs-services/bobs-services.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepairServiceFormComponent } from './services/repair-service-form/repair-service-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EmployeesOnlyComponent } from './employees-only/employees-only.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    RepairServiceFormComponent,
    EmployeesOnlyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    BobsServicesModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  entryComponents: [
    RepairServiceFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
