import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { KatModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        KatModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
