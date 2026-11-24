import { Component, inject } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import {HousingService} from '../housing-service';

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
    <!-- Step 2: put this component's house into the child's "housingLocation" input slot -->
    <section class="results">
      @for (housingLocation of housingLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation" />
      }
    </section>
  `,
})

export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  //Home gets the service with inject(HousingService)
  housingService: HousingService = inject(HousingService);

  //fills housingLocationList from getAllHousingLocations() in the constructor.
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}