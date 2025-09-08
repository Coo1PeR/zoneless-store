import { Component, inject } from '@angular/core';
import { UserData } from '../../core/services/user-data';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-admin-view-user-list',
    imports: [
        MatProgressSpinnerModule,
        MatTableModule,
        RouterLink,
        MatCard,
        MatCardContent,
    ],
    templateUrl: './admin-view-user-list.html',
    styleUrl: './admin-view-user-list.scss'
})
export class AdminViewUserList {
    private userData = inject(UserData);

    protected userList = this.userData.userList.data;
    protected isLoadingUserList  = this.userData.userList.loading;
    protected displayedColumns = ['id', 'username', 'email'];
}
