import { Component } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';

@Component({
  imports: [HousingLocation],
  selector: 'app-home',
  styleUrl: './home.css',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- Step 2: put this component's house into the child's "housingLocation" input slot -->
      <app-housing-location [housingLocation]="housingLocation" />
    </section>
  `,
})

export class Home {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  // Step 1: the parent owns the house data that gets passed down to HousingLocation.
  housingLocation: HousingLocationInfo = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}