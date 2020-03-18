import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-address',
  templateUrl: './reactive-form-address.component.html',
  styleUrls: ['./reactive-form-address.component.scss']
})
export class ReactiveFormAddressComponent implements OnInit {
  userForm: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.userForm = this.controlContainer.control as FormGroup;
  }
}
