import { Component, input } from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-housing-location',
  styleUrl: './housing-location.css',
  template: `
    <!-- Step 4: read the house from the input. The () is needed because inputs are signals. -->
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
      <a [routerLink]="['/details', housingLocation().id]">Learn More</a>
    </section>
  `,
})
export class HousingLocation {
  // Step 3: the input slot that receives the house from the parent (Home).
  // "required" means the parent must fill it, or the app won't build.
  housingLocation = input.required<HousingLocationInfo>();
}
