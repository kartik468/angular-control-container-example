import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormCompanyComponent } from './template-driven-form-company.component';

describe('TemplateDrivenFormCompanyComponent', () => {
  let component: TemplateDrivenFormCompanyComponent;
  let fixture: ComponentFixture<TemplateDrivenFormCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
