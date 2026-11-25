//ng generate service housingService --skip-tests
import { Service } from '@angular/core';
import {HousingLocationInfo} from './housinglocation';

@Service()
export class HousingService {

  // Static file served from src/public, so it works on Vercel without a backend.
  url = '/public/locations.json';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const locations = await this.getAllHousingLocations();
    return locations.find((location) => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
