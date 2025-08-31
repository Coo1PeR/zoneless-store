import { Component } from '@angular/core';
import { NavLink } from '../../core/models/nav-link';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-admin-sidenav',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './admin-sidenav.html',
    styleUrl: './admin-sidenav.scss'
})
export class AdminSidenav {
    protected readonly sidenavLinks: NavLink[] = [
        {label: 'Список покупателей', path: '/admin/users-list', icon: 'patient_list'},
    ];
}
