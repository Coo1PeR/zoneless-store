import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../core/services/user-data';
import { BackButton } from '../../shared/back-button/back-button';
import { TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SkeletonText } from '../../shared/skeleton-text/skeleton-text';
import { AdminViewUserCartList } from '../admin-view-user-cart-list/admin-view-user-cart-list';

@Component({
  selector: 'app-admin-view-user',
    imports: [
        BackButton,
        TitleCasePipe,
        MatCardModule,
        SkeletonText,
        AdminViewUserCartList
    ],
  templateUrl: './admin-view-user.html',
  styleUrl: './admin-view-user.scss'
})
export class AdminViewUser {
    private route = inject(ActivatedRoute);
    private userData = inject(UserData);

    protected userId = computed(() => Number(this.route.snapshot.paramMap.get('userId')!));
    protected userResource = this.userData.createUserResource(this.userId());

    protected fullName = computed(() => {
        const user = this.userResource.data();
        return user ? `${user.name.firstname} ${user.name.lastname}` : '';
    });
    protected fullAddress = computed(() => {
        const user = this.userResource.data();
        return user ? `${user.address.zipcode} ${user.address.city} ${user.address.street} ${user.address.number}` : '';
    })


}
