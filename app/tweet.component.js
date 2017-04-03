System.register(["angular2/core"], function (exports_1, context_1) {
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
    var core_1, TweetComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TweetComponent = (function () {
                function TweetComponent() {
                    this.isClicked = false;
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
            ], TweetComponent.prototype, "isClicked", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], TweetComponent.prototype, "change", void 0);
            TweetComponent = __decorate([
                core_1.Component({
                    selector: 'tweet',
                    template: "\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                <img class=\"media-object\" src=\"...\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">Media heading</h4>\n                ...\n            </div>\n        </div>\n            ",
                })
            ], TweetComponent);
            exports_1("TweetComponent", TweetComponent);
        }
    };
});
//# sourceMappingURL=tweet.component.js.map