import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import Country from '../models/country';
import { Preferences } from '@capacitor/preferences';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // class property 
  selectedCountry!: Country;
  waringMsg: string ="";

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private router: Router,
    private toastController: ToastController) {    
    
      this.route.queryParams.subscribe(params => {
      this.getCountry(params['selectedCountry']);

    })
  }

  async getCountry(alpha3Code: String) {
        try {
          // 1. define the api endpoint
          const URL = `https://restcountries.com/v2/alpha/${alpha3Code}`
          // 2. connect to it and get response
          const response: Country = await lastValueFrom(this.http.get<Country>(URL))
          // 3. set the class property to the list retrieved from the URL
          this.selectedCountry = response;

        } catch(e) {
          console.log(e);
        }
  }

  async save() {
    try{
      // 1. Get the getResult
      let results = await Preferences.get({ key: 'SavedCountry'});
      // 2. Parse the JSON into object to an temp arr for modifying the data, results var won't work
      let tempList: string[] = results.value ? JSON.parse(results.value) : [];      

      if (tempList.includes(this.selectedCountry.alpha3Code)) {
        this.toast("This country is already added to the favorite list");
        return;
      } 

      // 3. push the new code to the temp array
      tempList.push(this.selectedCountry.alpha3Code);
      // 4. Stringify the parsed array back to JSON to set the storage value 
      await Preferences.set({ key: 'SavedCountry', value: JSON.stringify(tempList)});
      
      // display a toast
      this.toast("Country saved");
      console.log("Country saved")

    
  } catch (e) {
      console.log(e);
    }
  }

  async toast(string: String) {
    const toast = await this.toastController.create({
      message: `${string}`,
      duration: 1500,
      position: 'bottom',
      color: 'light',
      icon: 'duplicate'
    });
    await toast.present();
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
