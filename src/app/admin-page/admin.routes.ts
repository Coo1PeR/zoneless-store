import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
    {
        path: 'users-list',
        children: [
            {
                path: '',
                title: 'Users List',
                loadComponent: () => import('./admin-user-list/admin-user-list').then(m => m.AdminUserList),
            },
            {
                path: ':userId',
                title: 'User',
                loadComponent: () => import('./admin-user/admin-user').then(m => m.AdminUser),
            }
        ]
    }
];
