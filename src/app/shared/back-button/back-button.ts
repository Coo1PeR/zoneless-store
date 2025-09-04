import { Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';

@Component({
    selector: 'app-back-button',
    imports: [
        MatIconModule,
        MatMiniFabButton
    ],
    templateUrl: './back-button.html',
    styleUrl: './back-button.scss'
})
export class BackButton {
    private location = inject(Location);
    private router = inject(Router);

    public route = input<string | null>(null);
    public disableNavigation = input(false);

    navigateBack() {
        if (!this.disableNavigation()) {
            if (this.route()) {
                this.router.navigate([this.route()]);
            } else {
                this.location.back();
            }
        }
    }

}
