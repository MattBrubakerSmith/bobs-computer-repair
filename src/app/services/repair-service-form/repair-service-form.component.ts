import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-repair-service-form',
  templateUrl: './repair-service-form.component.html',
  styleUrls: ['./repair-service-form.component.scss']
})
export class RepairServiceFormComponent {
  repairServiceForm: FormGroup

  constructor() { 
  }

  onSubmit(formData) {
    console.log(formData)
  }
}
