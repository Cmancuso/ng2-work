import {Component, Input, EventEmitter, Output} from 'angular2/core';
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="http://lorempixel.com/100/100/people?1">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{Name}} {{Handle}}</h4>
                <p>Some Text</p>
                <like></like>
            </div>
        </div>
            `,
    styles: [`
        .voter{
            width: 20px;
            text-align: center;
            color: #999
        }
        .pointer{
            cursor: pointer;
        }
        .highlighter{
            color: gold;
        }
        .glyphicon-filled{
            color: deeppink
        }
        `
    ],
    directives: [LikeComponent]
})
export class TweetComponent { 
    
	@Input() Name = 'Test';
    @Input() Handle = '@Test';
    @Output() change = new EventEmitter

	onclick(){
		this.isClicked = !this.isClicked
        this.change.emit({newvalue: this.isClicked})
		console.log(this.isClicked)
	}
}


