import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
    selector: 'my-title',
    imports: [],
    template: `
        <h1 class="text-3xl mb-5">{{ title }}</h1>
    `,
})
export class TitleComponent {
    // title = input.required<string>();
    @Input({ required: true }) title!: string;
    @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
