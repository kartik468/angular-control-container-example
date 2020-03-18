import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-company',
  templateUrl: './template-driven-form-company.component.html',
  styleUrls: ['./template-driven-form-company.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgModelGroup
    }
  ]
})
export class TemplateDrivenFormCompanyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
