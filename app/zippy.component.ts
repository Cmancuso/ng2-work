import {Component, Input, EventEmitter, Output} from 'angular2/core';


@Component({
    selector: 'zippy',
    template: `
    <div class = "panel panel-default">
        <div class = "panel panel-heading" (click) = "onclick($event)" >
            <li class = glyphicon [ngClass] = "{
                'glyphicon-chevron-up': isClicked,
                'glyphicon-chevron-down': !isClicked                
            }">
            </li>
            <ng-content select = ".title"></ng-content>
        </div>
        <div class = "panel panel-body" [ngClass] = "{
            active: isClicked,
            hidden: !isClicked
        }">
            <ng-content select = ".body"></ng-content>
        </div>
    </div>
            `,
})
export class ZippyComponent { 
    
	@Input() isClicked = true;
    @Output() change = new EventEmitter

	onclick(){
		this.isClicked = !this.isClicked
        this.change.emit({newvalue: this.isClicked})
		console.log(this.isClicked)
	}
}