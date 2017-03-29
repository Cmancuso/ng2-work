import {Component, Input, EventEmitter, Output} from 'angular2/core';


@Component({
    selector: 'vote',
    template: `
        <div>
            <i (click) = "onclick($event)" 
                [class] = "isClicked ? ' glyphicon glyphicon-menu-up ' 
                : ' highlighter glyphicon glyphicon-menu-up'">
            </i><br>
            <span>{{count}}</span><br>
            <i (click) = "onclick($event)" 
                [class] = "isClicked ? ' glyphicon glyphicon-menu-down ' 
                : ' highlighter glyphicon glyphicon-menu-down'">
            </i>
        </div>
            `,
    styles: [`
        .highlighter{
            color: gold;
            cursor: pointer;
        }
        .glyphicon-filled{
            color: deeppink
        }
        `
    ]
})
export class VoteComponent { 
    @Input() count = 10;
	@Input() vote = 'up';
    @Output() change = new EventEmitter

	onclick(count){
        this.vote ? this.count++ : this.count--
		this.isClicked = !this.isClicked
        this.change.emit({newcount: this.count})
		console.log(this.isClicked)
	}
}