import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-sample',
    template: `<ng-katex [equation]="equation"></ng-katex>`
})
export class SampleComponent {
    equation = '\\sum_{i=1}^nx_i';
}
