import { GeolocationModel } from './geolocation-model';

export interface AddressModel {
    geolocation: GeolocationModel,
    city: string,
    street: string,
    number: number
    zipcode: string
}
