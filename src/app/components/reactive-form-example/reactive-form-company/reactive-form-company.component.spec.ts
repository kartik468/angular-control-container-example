import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCompanyComponent } from './reactive-form-company.component';

describe('ReactiveFormCompanyComponent', () => {
  let component: ReactiveFormCompanyComponent;
  let fixture: ComponentFixture<ReactiveFormCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
