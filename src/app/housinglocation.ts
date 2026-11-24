// The shape of a house. Home (parent) and HousingLocation (child) both use it,
// so TypeScript checks that the data passed between them has these fields.
export interface HousingLocationInfo {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}