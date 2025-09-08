import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../core/services/user-data';
import { BackButton } from '../../shared/back-button/back-button';
import { TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SkeletonText } from '../../shared/skeleton-text/skeleton-text';

@Component({
  selector: 'app-admin-user',
    imports: [
        BackButton,
        TitleCasePipe,
        MatCardModule,
        SkeletonText
    ],
  templateUrl: './admin-user.html',
  styleUrl: './admin-user.scss'
})
export class AdminUser {
    private route = inject(ActivatedRoute);
    private userData = inject(UserData);

    protected partyId = computed(() => Number(this.route.snapshot.paramMap.get('userId')!));
    protected userResource = this.userData.createUserResource(this.partyId());

    protected fullName = computed(() => {
        const user = this.userResource.data();
        return user ? `${user.name.firstname} ${user.name.lastname}` : '';
    });
    protected fullAddress = computed(() => {
        const user = this.userResource.data();
        return user ? `${user.address.zipcode} ${user.address.city} ${user.address.street} ${user.address.number}` : '';
    })


}
