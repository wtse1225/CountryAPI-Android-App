import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import Country from '../models/country';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // class property 
  countryList: Country[] = [];

  constructor(private router: Router, 
    private http: HttpClient) {}

  ngOnInit() {
    this.getCountry();    
  }

  async getCountry() {
    try {

      // 1. define the api endpoint
      const URL = "https://restcountries.com/v2/all"
      // 2. connect to it and get response
      const response: Country[] = await lastValueFrom(this.http.get<Country[]>(URL))
      // 3. set the class property to the list retrieved from the URL
      this.countryList = response;

    } catch(e) {
      console.log(e);
    }
  }

  async rowPressed(e: any, selectedCountry: string) {
    this.router.navigate(['/details'], {queryParams: { selectedCountry }});
  }
}
