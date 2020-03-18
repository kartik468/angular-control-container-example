import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormAddressComponent } from './reactive-form-address.component';

describe('ReactiveFormAddressComponent', () => {
  let component: ReactiveFormAddressComponent;
  let fixture: ComponentFixture<ReactiveFormAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
