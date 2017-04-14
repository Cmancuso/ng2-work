import {Component, Input} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'
import {TweetComponent} from './tweet.component'
import {ZippyComponent} from './zippy.component'
import {ContactFormComponent} from './contact-form.component'
import {SubscriptionFormComponent} from './subscription-form.component'

@Component({
    selector: 'my-app',
    template: `
	<div>
		<h1>Hello Angular</h1>
		<favorite [isClicked] = "post.isClicked" (change) = onFavoriteChange($event)></favorite>
		<like [isClicked] = "post.isClicked" (change) = onLikeChange($event)></like>
		<vote [myVote] = "post.myVote" [voteCount]="post.voteCount"></vote>
		<tweet></tweet>
		<zippy title = "this is the Title">
			<div class = "title">This is the Title</div>
			<div class = "body">This is the body</div>
		</zippy>
		<!--<contact-form></contact-form>-->
		<subscription-form></subscription-form>
	</div>			
    `,
    directives: [
		FavoriteComponent, LikeComponent, 
		VoteComponent, TweetComponent, 
		ZippyComponent, ContactFormComponent,
		SubscriptionFormComponent
		]
})
export class AppComponent { 
	post = {
		title: "this is the title",
		isClicked: true,
		voteCount: 9,
		myVote: 'neutral'
	}

	onFavoriteChange($event){
		console.log($event)
	}
	onLikeChange($event){
		console.log($event)
	}
}