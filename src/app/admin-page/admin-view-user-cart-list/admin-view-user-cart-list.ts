import { Component, computed, inject, input, signal } from '@angular/core';
import { UserData } from '../../core/services/user-data';
import { MatExpansionModule } from '@angular/material/expansion';
import { DatePipe } from '@angular/common';
import { AdminViewUserCart } from '../admin-view-user-cart/admin-view-user-cart';

@Component({
  selector: 'app-admin-view-user-cart-list',
    imports: [
        MatExpansionModule,
        DatePipe,
        AdminViewUserCart,
    ],
  templateUrl: './admin-view-user-cart-list.html',
  styleUrl: './admin-view-user-cart-list.scss'
})
export class AdminViewUserCartList {
    private userData = inject(UserData);

    public userId = input.required<number>();

    protected cartList = computed(() =>
        this.userData.cartList.data()?.filter(cart => cart.userId === this.userId())
    )
}
