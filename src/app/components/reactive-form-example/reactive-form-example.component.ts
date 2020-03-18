import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {
  userForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipcode: new FormControl('', [Validators.required])
      }),
      company: new FormGroup({
        name: new FormControl('', [Validators.required]),
        catchPhrase: new FormControl('', [Validators.required])
      })
    });
  }
}
