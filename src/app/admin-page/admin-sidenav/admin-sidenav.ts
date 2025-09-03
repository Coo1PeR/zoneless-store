import { Component } from '@angular/core';
import { NavLink } from '../../core/models/nav-link';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-admin-sidenav',
    imports: [
        RouterLink,
        RouterLinkActive,
        MatIconModule,
    ],
    templateUrl: './admin-sidenav.html',
    styleUrl: './admin-sidenav.scss'
})
export class AdminSidenav {
    protected readonly sidenavLinks: NavLink[] = [
        {label: 'Users', path: '/admin/users-list', icon: 'article_person'},
    ];
}
