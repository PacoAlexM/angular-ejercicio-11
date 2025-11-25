import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'S'|'A'|'B'|'C'|'D'

@Component({
    selector: 'control-flow',
    imports: [TitleComponent],
    templateUrl: './control-flow.component.html',
})
export default class controlFlowComponent {
    public showContent = signal(false);
    public grade = signal<Grade>('A');
    public frameworks = signal(['Angular', 'React', 'Vue', 'Qwik', 'Express']);
    public frameworks2 = signal([]);
    
    public toggleContent() {
        this.showContent.update(val => !val);
    }
}
