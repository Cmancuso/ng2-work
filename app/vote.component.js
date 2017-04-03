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
                    this.voteCount = 0;
                    this.myVote = 'neutral';
                    this.change = new core_1.EventEmitter;
                }
                VoteComponent.prototype.onclickUp = function (voteCount, myVote) {
                    if (this.myVote == 'neutral') {
                        this.myVote = 'up';
                        this.voteCount++;
                    }
                    else if (this.myVote == 'down') {
                        this.myVote = 'neutral';
                        this.voteCount++;
                    }
                };
                VoteComponent.prototype.onclickDown = function (voteCount, myVote) {
                    if (this.myVote == 'neutral') {
                        this.myVote = 'down';
                        this.voteCount--;
                    }
                    else if (this.myVote == 'up') {
                        this.myVote = 'neutral';
                        this.voteCount--;
                    }
                };
                return VoteComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], VoteComponent.prototype, "voteCount", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], VoteComponent.prototype, "myVote", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], VoteComponent.prototype, "change", void 0);
            VoteComponent = __decorate([
                core_1.Component({
                    selector: 'vote',
                    template: "\n        <div class = \"voter\">\n            <i (click) = \"onclickUp($event)\" class = \"pointer\"\n                [class] = \"myVote == 'up' ? ' highlighter glyphicon glyphicon-menu-up pointer' \n                : '  glyphicon glyphicon-menu-up pointer'\">\n            </i>\n            <span>{{voteCount}}</span>\n            <i (click) = \"onclickDown($event)\" class = \"pointer\"\n                [class] = \"myVote == 'down' ? ' highlighter glyphicon glyphicon-menu-down pointer' \n                : '  glyphicon glyphicon-menu-down pointer'\">\n            </i>\n        </div>\n            ",
                    styles: ["\n        .voter{\n            width: 20px;\n            text-align: center;\n            color: #999\n        }\n        .pointer{\n            cursor: pointer;\n        }\n        .highlighter{\n            color: gold;\n        }\n        .glyphicon-filled{\n            color: deeppink\n        }\n        "
                    ]
                })
            ], VoteComponent);
            exports_1("VoteComponent", VoteComponent);
        }
    };
});
//# sourceMappingURL=vote.component.js.map