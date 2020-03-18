import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormAddressComponent } from './template-driven-form-address.component';

describe('TemplateDrivenFormAddressComponent', () => {
  let component: TemplateDrivenFormAddressComponent;
  let fixture: ComponentFixture<TemplateDrivenFormAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
