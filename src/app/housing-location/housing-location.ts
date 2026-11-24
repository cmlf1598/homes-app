import { Component, input } from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';

@Component({
  imports: [],
  selector: 'app-housing-location',
  styleUrl: './housing-location.css',
  template: `
    <p>
      <!-- Step 4: read the house from the input. The () is needed because inputs are signals. -->
      {{ housingLocation().name }}
    </p>
  `,
})
export class HousingLocation {
  // Step 3: the input slot that receives the house from the parent (Home).
  // "required" means the parent must fill it, or the app won't build.
  housingLocation = input.required<HousingLocationInfo>();
}
