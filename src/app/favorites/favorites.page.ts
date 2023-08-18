import { Component, OnInit } from '@angular/core';
import Country from '../models/country';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  countryList: Country[] = [];

  constructor(private router: Router) {    
  }

  async getCountryList() {
    try {
      let results = await Preferences.get({ key: 'SavedCountry'});
      this.countryList = results.value ? JSON.parse(results.value) : [];
    } catch(e) {
      console.log(e);
    }
  }

  async deleteCountry(deleteCountry: Country) {
    try {
      this.countryList = this.countryList.filter(country => country !== deleteCountry);
      await Preferences.set({ key: 'SavedCountry', value: JSON.stringify(this.countryList) });
      console.log('Saved country deleted');
    } catch (e) {
      console.log(e);
    }
  }

  async getDetail(country: Country) {
    this.router.navigate(['/details'], { queryParams: { selectedCountry: country } });
  }

  async deleteAll() {
    try {
      this.countryList = [];
      await Preferences.set({ key: 'SavedCountry', value: JSON.stringify(this.countryList)});
      console.log('All saves deleted');
    } catch(e) {
      console.log(e);
    }
  }

  ngOnInit() {
    this.getCountryList();
  }
  
  // refresh the Favorites tab every time is is being loaded
  ionViewWillEnter() {
    this.getCountryList();
  }

}
