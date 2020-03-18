import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupName, FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-company',
  templateUrl: './reactive-form-company.component.html',
  styleUrls: ['./reactive-form-company.component.scss']
})
export class ReactiveFormCompanyComponent implements OnInit {
  companyFormGroup: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.companyFormGroup = this.controlContainer.control as FormGroup;
  }
}
