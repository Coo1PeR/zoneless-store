import { AddressModel } from './address-model';
import { NameModel } from './name-model';

export interface UserModel {
    id: number,
    name: NameModel,
    username: string,
    email: string,
    address: AddressModel,
    password: string,
    phone: string,
    __v: number,
}
