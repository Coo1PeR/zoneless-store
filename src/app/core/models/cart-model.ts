import { ProductsInCartModel } from './products-in-cart-model';

export interface CartModel {
    id: number;
    userId: number;
    date: Date;
    products: ProductsInCartModel[];
    __v: number;
}
