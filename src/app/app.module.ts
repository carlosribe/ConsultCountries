
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { ConsultCountriesComponent } from './consult-countries/consult-countries.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from './service/country.service';
import { MapValuePipe } from './pipe/object-map-value.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { MapKeyPipe } from './pipe/object-map-key.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConsultCountriesComponent,
    MapKeyPipe,
    MapValuePipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    NgbModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [HttpClientModule, CountryService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
