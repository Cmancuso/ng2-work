import {Component, Input, EventEmitter, Output} from 'angular2/core';


@Component({
    selector: 'like',
    template: `<i (click) = "onclick($event)" class = glyphicon glyphicon-heart
                [class]="isClicked ? 'glyphicon glyphicon-heart' 
                : 'glyphicon glyphicon-heart glyphicon-filled'">
                </i>
                {{count}}
            `,
    styles: [`
        
        
        .glyphicon-heart{
            color: #ccc;
            cursor: pointer;
        }
        .glyphicon-filled{
            color: deeppink
        }
        `
    ]
})
export class LikeComponent { 
    @Input() count = 10;
	@Input() isClicked = true;
    @Output() change = new EventEmitter

	onclick(count){
        this.isClicked ? this.count++ : this.count--
		this.isClicked = !this.isClicked
        this.change.emit({newcount: this.count})
		console.log(this.isClicked)
	}
}