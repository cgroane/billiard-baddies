
export interface Address {
  address: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
}
export interface PoolTableAutoFillData extends google.maps.places.PlaceResult {
  address: Address;
  coordinates: {
    lat: number;
    lng: number;
  }
}

export interface PoolTable extends PoolTableAutoFillData {
  cost: string;
  rate: Rates;
}

export enum Rates  {
  'hourly' = 'Hourly',
  'perGame' = 'Per Game'
}