import { Component, input } from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';

@Component({
  imports: [],
  selector: 'app-housing-location',
  styleUrl: './housing-location.css',
  template: `
    <p>
      housing-location works!
    </p>
  `,
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
