System.register(["angular2/core", "./like.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, like_component_1, TweetComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }
        ],
        execute: function () {
            TweetComponent = (function () {
                function TweetComponent() {
                    this.Name = 'Test';
                    this.Handle = '@Test';
                    this.change = new core_1.EventEmitter;
                }
                TweetComponent.prototype.onclick = function () {
                    this.isClicked = !this.isClicked;
                    this.change.emit({ newvalue: this.isClicked });
                    console.log(this.isClicked);
                };
                return TweetComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], TweetComponent.prototype, "Name", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], TweetComponent.prototype, "Handle", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], TweetComponent.prototype, "change", void 0);
            TweetComponent = __decorate([
                core_1.Component({
                    selector: 'tweet',
                    template: "\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" src=\"http://lorempixel.com/100/100/people?1\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{Name}} {{Handle}}</h4>\n                <p>Some Text</p>\n                <like></like>\n            </div>\n        </div>\n            ",
                    styles: ["\n        .voter{\n            width: 20px;\n            text-align: center;\n            color: #999\n        }\n        .pointer{\n            cursor: pointer;\n        }\n        .highlighter{\n            color: gold;\n        }\n        .glyphicon-filled{\n            color: deeppink\n        }\n        "
                    ],
                    directives: [like_component_1.LikeComponent]
                })
            ], TweetComponent);
            exports_1("TweetComponent", TweetComponent);
        }
    };
});
//# sourceMappingURL=tweet.component.js.map