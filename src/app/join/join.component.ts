// join.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  petName: string = '';
  ownerName: string = '';
  email: string = '';
  phone: string = '';
  appointmentDate: string = '';
  appointmentTime: string = '';
  additionalInfo: string = '';

  submitted: boolean = false;

  submitForm() {
    this.submitted = true;
  }
}
