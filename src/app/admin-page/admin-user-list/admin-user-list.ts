import { Component, inject } from '@angular/core';
import { UserData } from '../../core/services/user-data';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-admin-user-list',
    imports: [
        MatProgressSpinnerModule,
        MatTableModule
    ],
    templateUrl: './admin-user-list.html',
    styleUrl: './admin-user-list.scss'
})
export class AdminUserList {
    private userData = inject(UserData);

    protected userList = this.userData.userList.data;
    protected isLoadingUserList  = this.userData.userList.loading;
    protected displayedColumns = ['id', 'username', 'email'];
}
