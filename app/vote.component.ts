import {Component, Input, EventEmitter, Output} from 'angular2/core';


@Component({
    selector: 'vote',
    template: `
        <div class = "voter">
            <i (click) = "onclickUp($event)" class = "pointer"
                [class] = "myVote == 'up' ? ' highlighter glyphicon glyphicon-menu-up pointer' 
                : '  glyphicon glyphicon-menu-up pointer'">
            </i>
            <span>{{voteCount}}</span>
            <i (click) = "onclickDown($event)" class = "pointer"
                [class] = "myVote == 'down' ? ' highlighter glyphicon glyphicon-menu-down pointer' 
                : '  glyphicon glyphicon-menu-down pointer'">
            </i>
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
    ]
})
export class VoteComponent { 
    @Input() voteCount = 0;
	@Input() myVote = 'neutral';
    @Output() change = new EventEmitter

	onclickUp(voteCount,myVote){
        if(this.myVote == 'neutral'){
            this.myVote = 'up';
            this.voteCount++   
        }
        else if (this.myVote == 'down'){
            this.myVote = 'neutral'
            this.voteCount++
        }
    }
    onclickDown(voteCount,myVote){
        if(this.myVote == 'neutral'){
            this.myVote = 'down';
            this.voteCount--   
        }
        else if (this.myVote == 'up'){
            this.myVote = 'neutral'
            this.voteCount--
        }
    }
       
	
}