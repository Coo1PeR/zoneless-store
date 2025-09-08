import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product-model';
import { createApiResource } from '../../shared/utils/create-api-resource';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductsData {
    private http = inject(HttpClient);

    public productList = createApiResource(
        () => this.getAllProducts(),
        { initialValue: [], errorValue: [], autoFetch: true }
    );

    /** Get all products */
    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('/products');
    }
}
