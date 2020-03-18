import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-template-driven-form-example',
  templateUrl: './template-driven-form-example.component.html',
  styleUrls: ['./template-driven-form-example.component.scss']
})
export class TemplateDrivenFormExampleComponent implements OnInit {
  // user: User;

  constructor() {}

  ngOnInit(): void {
    // this.user = {
    //   id: null,
    //   name: '',
    //   address: {
    //     city: '',
    //     zipcode: '',
    //     street: ''
    //   }
    // };
  }
}
