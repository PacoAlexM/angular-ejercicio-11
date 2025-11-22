import { Component, signal } from '@angular/core';

@Component({
    selector: 'control-flow',
    imports: [],
    templateUrl: './control-flow.component.html',
})
export default class controlFlowComponent {
    public showContent = signal(false);

    public toggleContent() {
        this.showContent.update(val => !val);
    }
}
