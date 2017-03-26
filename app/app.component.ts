import {Component, Input} from 'angular2/core';
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <i (click) = "onclick($event)" [class]="isClicked ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'"></i>
    `

})
export class AppComponent { 
	@Input() isClicked = false;
	onclick(){
		this.isClicked = !this.isClicked
		console.log(this.isClicked)
	}
}