System.register(['angular2/core', './favorite.component', './like.component', './vote.component', './tweet.component', './zippy.component', './contact-form.component', './subscription-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, favorite_component_1, like_component_1, vote_component_1, tweet_component_1, zippy_component_1, contact_form_component_1, subscription_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "this is the title",
                        isClicked: true,
                        voteCount: 9,
                        myVote: 'neutral'
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onLikeChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<div>\n\t\t<h1>Hello Angular</h1>\n\t\t<favorite [isClicked] = \"post.isClicked\" (change) = onFavoriteChange($event)></favorite>\n\t\t<like [isClicked] = \"post.isClicked\" (change) = onLikeChange($event)></like>\n\t\t<vote [myVote] = \"post.myVote\" [voteCount]=\"post.voteCount\"></vote>\n\t\t<tweet></tweet>\n\t\t<zippy title = \"this is the Title\">\n\t\t\t<div class = \"title\">This is the Title</div>\n\t\t\t<div class = \"body\">This is the body</div>\n\t\t</zippy>\n\t\t<!--<contact-form></contact-form>-->\n\t\t<subscription-form></subscription-form>\n\t</div>\t\t\t\n    ",
                        directives: [
                            favorite_component_1.FavoriteComponent, like_component_1.LikeComponent,
                            vote_component_1.VoteComponent, tweet_component_1.TweetComponent,
                            zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent,
                            subscription_form_component_1.SubscriptionFormComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.old.js.map