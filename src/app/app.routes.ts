import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page';

export const routes: Routes = [
    {
        path: '',
        component: AdminPage,
        children: [
            {
                path: 'admin',
                loadChildren: () => import('./admin-page/admin.routes').then(m => m.AdminRoutes),
            }
        ]
    }
];
