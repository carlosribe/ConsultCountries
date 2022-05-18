import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';

import { Country } from '../model/country';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-consult-countries',
  templateUrl: './consult-countries.component.html',
  styleUrls: ['./consult-countries.component.scss']
})
export class ConsultCountriesComponent{
  countries: Array<Country> = new Array();
  viewCountries: Array<Country> = new Array();

  form = new FormGroup({
    name: new FormControl(),
    initial: new FormControl(),
    currency: new FormControl(),
  })

  constructor( private service: CountryService) {
    this.search();
  }

  search(){
    if(this.form.value.name || this.form.value.initial || this.form.value.currency) {
      this.viewCountries = this.countries
        .filter(country => !this.form.value.name || country.name.common.toLowerCase().includes(this.form.value.name.toLowerCase()))
        .filter(country => !this.form.value.initial || country.cca3.toLowerCase().includes(this.form.value.initial))
        .filter(country => !this.form.value.currency || country.currencies && Object.keys(country.currencies).join('').trim().includes(this.form.value.currency.toUpperCase()));
    } 
    else {
      this.service.getCountries().subscribe(countries =>{
        this.countries = countries;
        this.viewCountries = this.countries;
      })
    }
  }

  handleExpand(index: number) {
    document.querySelector(`#expanded-${index}`)?.classList.toggle('hidden');
  }
}

