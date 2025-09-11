import { Component, computed, inject, input } from '@angular/core';
import { ProductsData } from '../../core/services/products-data';
import { ProductsInCartModel } from '../../core/models/products-in-cart-model';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../core/models/product-model';
import { ProductWithQuantity } from '../../core/models/product-with-quantity-model';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-admin-view-user-cart',
    imports: [
        MatTableModule,
        MatCard,
        MatCardContent,
        CurrencyPipe,
    ],
    templateUrl: './admin-view-user-cart.html',
    styleUrl: './admin-view-user-cart.scss'
})
export class AdminViewUserCart {
    private productsData = inject(ProductsData);

    public cart = input.required<ProductsInCartModel[]>();

    protected productsList = computed((): Product[] => this.productsData.productList.data());
    protected productsTotal = computed((): ProductWithQuantity[] =>
        this.cart().map(cartItem => {
            const product = this.productsList().find(p => p.id === cartItem.productId)!;
            return {
                ...product,
                quantity: cartItem.quantity,
            };
        })
    );
    protected totalSum = computed(() => this.productsTotal()
        .map(product => product.quantity * product.price)
        .reduce((acc, value) => acc + value, 0)
    )
    protected totalQuantity = computed(() => this.productsTotal()
        .map(product => product.quantity)
        .reduce((acc, value) => acc + value, 0)
    )

    protected displayedColumns = ['title', 'category', 'price', 'quantity', 'sum'];
}
