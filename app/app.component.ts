import {Component} from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1></div>
    <h2>Let's Code Some More</h2>
    `
})
export class AppComponent
{
    pageTitle : string = "Prasanth's Angular Page";
}
