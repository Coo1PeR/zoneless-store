import { Component, input } from '@angular/core';
import { Skeleton } from '../skeleton/skeleton';

@Component({
  selector: 'app-skeleton-text',
    imports: [
        Skeleton
    ],
  templateUrl: './skeleton-text.html',
  styleUrl: './skeleton-text.scss'
})
export class SkeletonText {
    public loading = input<boolean>(false);
    public width = input<number | string>(160);
    public height = input<number | string>('100%');
}
