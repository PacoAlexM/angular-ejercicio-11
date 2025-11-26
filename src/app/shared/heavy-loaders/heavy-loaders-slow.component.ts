import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'heavy-loaders-slow',
    imports: [CommonModule],
    template: `
        <section [ngClass]="['h-[600px] w-full', cssClass]">Heavy Loader Slow</section>
    `,
})
export class HeavyLoadersSlowComponent {
    @Input({ required: true }) cssClass!: string;

    constructor() {
        const start = Date.now();

        while (Date.now() - start < 3000) {}

        console.log('Cargado');
    }
}
