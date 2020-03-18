import { Component, OnInit, Optional, Host } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-address',
  templateUrl: './template-driven-form-address.component.html',
  styleUrls: ['./template-driven-form-address.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TemplateDrivenFormAddressComponent implements OnInit {
  constructor() {}
  // constructor(@Optional() @Host() private userForm: NgForm) {}

  ngOnInit(): void {
    // console.log(this.userForm);
  }
}
