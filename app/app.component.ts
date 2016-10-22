import {Component} from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{PageTitle}</h1></div>`
})
export class  AppComponent
{
    pagetitle : string = "Prasanth's Angular Page";
}
