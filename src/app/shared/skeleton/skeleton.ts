import { Component, computed, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-skeleton',
    imports: [
        NgStyle
    ],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.scss'
})
export class Skeleton {
    public width = input<string | number>(160);
    public height = input<string | number>('100%');
    public radius = input<number>(4);

    protected style = computed(() => ({
        width: typeof this.width() === 'number' ? `${this.width()}px` : this.width(),
        height: typeof this.height() === 'number' ? `${this.height()}px` : this.height(),
        borderRadius: `${this.radius()}px`,
    }));
}
