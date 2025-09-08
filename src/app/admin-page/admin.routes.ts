import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
    {
        path: 'users-list',
        children: [
            {
                path: '',
                title: 'Users List',
                loadComponent: () => import('./admin-user-list/admin-view-user-list').then(m => m.AdminViewUserList),
            },
            {
                path: ':userId',
                title: 'User',
                loadComponent: () => import('./admin-user/admin-view-user').then(m => m.AdminViewUser),
            }
        ]
    }
];
