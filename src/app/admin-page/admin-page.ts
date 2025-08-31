import { Component } from '@angular/core';
import { AdminSidenav } from './admin-sidenav/admin-sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-page',
    imports: [
        AdminSidenav,
        RouterOutlet
    ],
    templateUrl: './admin-page.html',
    styleUrl: './admin-page.scss'
})
export class AdminPage {

}
