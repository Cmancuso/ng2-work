import {Component, Input, EventEmitter, Output} from 'angular2/core';


@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="..." alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                ...
            </div>
        </div>
            `,
})
export class TweetComponent { 
    
	@Input() isClicked = false;
    @Output() change = new EventEmitter

	onclick(){
		this.isClicked = !this.isClicked
        this.change.emit({newvalue: this.isClicked})
		console.log(this.isClicked)
	}
}


