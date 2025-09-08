import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
    {
        path: 'users-list',
        children: [
            {
                path: '',
                title: 'Users List',
                loadComponent: () => import('./admin-view-user-list/admin-view-user-list').then(m => m.AdminViewUserList),
            },
            {
                path: ':userId',
                title: 'User',
                loadComponent: () => import('./admin-view-user/admin-view-user').then(m => m.AdminViewUser),
            }
        ]
    },
    {
        path: 'products-list',
        children: [
            {
                path: '',
                title: 'Products List',
                loadComponent: () => import('./admin-view-product-list/admin-view-product-list').then(m => m.AdminViewProductList),
            }
        ]
    }
];
