import {Component, Input} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
				<favorite [isClicked] = "post.isClicked" (change) = onFavoriteChange($event)></favorite>
				
    			`,
    directives: [FavoriteComponent]
})
export class AppComponent { 
	post = {
		title: "this is the title",
		isClicked: true
	}

	onFavoriteChange($event){
		console.log($event)
	}
}