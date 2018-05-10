import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KatexModule } from 'ng-katex';

import { SampleComponent } from './sample.component';

@NgModule({
    declarations: [
        SampleComponent
    ],
    exports: [
        SampleComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        KatexModule
    ]
})
export class KatModule {
    static forRoot() {
        return {
            ngModule: KatModule,
            providers: []
        };
    }
}
