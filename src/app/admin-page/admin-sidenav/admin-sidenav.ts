import { Component } from '@angular/core';
import { NavLink } from '../../core/models/nav-link';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-admin-sidenav',
    imports: [
        RouterLink,
        RouterLinkActive,
        MatIconModule,
        MatListModule,
        MatButtonModule,
    ],
    templateUrl: './admin-sidenav.html',
    styleUrl: './admin-sidenav.scss'
})
export class AdminSidenav {
    protected readonly sidenavLinks: NavLink[] = [
        {label: 'Users', path: '/admin/users-list', icon: 'supervised_user_circle'},
        {label: 'Products', path: '/admin/products-list', icon: 'storefront'},
    ];
}
