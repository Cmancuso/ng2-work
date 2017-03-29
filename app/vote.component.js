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
    var core_1, VoteComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.count = 10;
                    this.vote = 'up';
                    this.change = new core_1.EventEmitter;
                }
                VoteComponent.prototype.onclick = function (count) {
                    this.vote ? this.count++ : this.count--;
                    this.isClicked = !this.isClicked;
                    this.change.emit({ newcount: this.count });
                    console.log(this.isClicked);
                };
                return VoteComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], VoteComponent.prototype, "count", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], VoteComponent.prototype, "vote", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], VoteComponent.prototype, "change", void 0);
            VoteComponent = __decorate([
                core_1.Component({
                    selector: 'vote',
                    template: "\n        <div>\n            <i (click) = \"onclick($event)\" \n                [class] = \"isClicked ? ' glyphicon glyphicon-menu-up ' \n                : ' highlighter glyphicon glyphicon-menu-up'\">\n            </i><br>\n            <span>{{count}}</span><br>\n            <i (click) = \"onclick($event)\" \n                [class] = \"isClicked ? ' glyphicon glyphicon-menu-down ' \n                : ' highlighter glyphicon glyphicon-menu-down'\">\n            </i>\n        </div>\n            ",
                    styles: ["\n        .highlighter{\n            color: gold;\n            cursor: pointer;\n        }\n        .glyphicon-filled{\n            color: deeppink\n        }\n        "
                    ]
                })
            ], VoteComponent);
            exports_1("VoteComponent", VoteComponent);
        }
    };
});
//# sourceMappingURL=vote.component.js.map