import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { EmployeesOnlyComponent } from './employees-only/employees-only.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "employees-only", component: EmployeesOnlyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
