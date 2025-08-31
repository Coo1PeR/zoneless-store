import { Component, computed, inject } from '@angular/core';
import { UserData } from '../../core/services/user-data';

@Component({
    selector: 'app-admin-user-list',
    imports: [],
    templateUrl: './admin-user-list.html',
    styleUrl: './admin-user-list.scss'
})
export class AdminUserList {
    private userData = inject(UserData);

    protected userList = computed(() => this.userData.userList())
}
