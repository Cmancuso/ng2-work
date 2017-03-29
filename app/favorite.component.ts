import {Component, Input, EventEmitter, Output} from 'angular2/core';


@Component({
    selector: 'favorite',
    template: `<i (click) = "onclick($event)" 
                [class]="isClicked ? 'glyphicon glyphicon-star' 
                : 'glyphicon glyphicon-star-empty'">
                </i>
            `,
})
export class FavoriteComponent { 
    
	@Input() isClicked = false;
    @Output() change = new EventEmitter

	onclick(){
		this.isClicked = !this.isClicked
        this.change.emit({newvalue: this.isClicked})
		console.log(this.isClicked)
	}
}