import {Component, Input} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'

@Component({
    selector: 'my-app',
    template: `
	<div>
		<h1>Hello Angular</h1>
		<favorite [isClicked] = "post.isClicked" (change) = onFavoriteChange($event)></favorite>
		<like [isClicked] = "post.isClicked" (change) = onLikeChange($event)></like>
		<vote></vote>
	</div>			
    `,
    directives: [FavoriteComponent, LikeComponent, VoteComponent]
})
export class AppComponent { 
	post = {
		title: "this is the title",
		isClicked: true
	}

	onFavoriteChange($event){
		console.log($event)
	}
	onLikeChange($event){
		console.log($event)
	}
}