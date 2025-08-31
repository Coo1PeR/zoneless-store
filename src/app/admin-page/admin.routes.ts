import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
    {
        path: 'users-list',
        title: 'User List',
        loadComponent: () => import('./admin-user-list/admin-user-list').then(m => m.AdminUserList),
    }
];
