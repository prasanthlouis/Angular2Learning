import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector : 'ai-star',
    templateUrl : "app/shared/star.component.html",
    styleUrls : ["app/shared/star.component.css"] 
})

export class StarComponent implements OnChanges
{
    starWidth : number;
    @Input() rating : number; 
    public ngOnChanges() : void {
        this.starWidth = this.rating * 86/5;
    } 
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    onClick() : void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}   