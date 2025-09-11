import { Product } from './product-model';

export interface ProductWithQuantity extends Product {
    quantity: number;
}
