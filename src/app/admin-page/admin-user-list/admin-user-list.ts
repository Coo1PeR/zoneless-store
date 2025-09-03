import { Component, inject } from '@angular/core';
import { UserData } from '../../core/services/user-data';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-admin-user-list',
    imports: [
        MatProgressSpinnerModule,
        MatTableModule,
        RouterLink
    ],
    templateUrl: './admin-user-list.html',
    styleUrl: './admin-user-list.scss'
})
export class AdminUserList {
    private userData = inject(UserData);

    protected userList = this.userData.userList.data;
    protected isLoadingUserList  = this.userData.userList.loading;
    protected displayedColumns = ['id', 'username', 'email'];

    chooseUser(id: number) {
        console.log('CHOOSE USER ID:', id);
    }
}
