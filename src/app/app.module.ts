import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormAddressComponent } from './components/reactive-form-example/reactive-form-address/reactive-form-address.component';
import { TemplateDrivenFormAddressComponent } from './components/template-driven-form-example/template-driven-form-address/template-driven-form-address.component';
import { TemplateDrivenFormCompanyComponent } from './components/template-driven-form-example/template-driven-form-company/template-driven-form-company.component';
import { ReactiveFormCompanyComponent } from './components/reactive-form-example/reactive-form-company/reactive-form-company.component';

@NgModule({
  declarations: [AppComponent, ReactiveFormExampleComponent, TemplateDrivenFormExampleComponent, ReactiveFormAddressComponent, TemplateDrivenFormAddressComponent, TemplateDrivenFormCompanyComponent, ReactiveFormCompanyComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
