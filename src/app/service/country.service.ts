import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url = 'https://localhost:7214/api/Countries';  

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {  
    return this.http.get(this.url);  
  }  
}
