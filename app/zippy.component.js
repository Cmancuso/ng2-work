System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isClicked = true;
                    this.change = new core_1.EventEmitter;
                }
                ZippyComponent.prototype.onclick = function () {
                    this.isClicked = !this.isClicked;
                    this.change.emit({ newvalue: this.isClicked });
                    console.log(this.isClicked);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "isClicked", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "change", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n    <div class = \"panel panel-default\">\n        <div class = \"panel panel-heading\" (click) = \"onclick($event)\" >\n            <li class = glyphicon [ngClass] = \"{\n                'glyphicon-chevron-up': isClicked,\n                'glyphicon-chevron-down': !isClicked                \n            }\">\n            </li>\n            <ng-content select = \".title\"></ng-content>\n        </div>\n        <div class = \"panel panel-body\" [ngClass] = \"{\n            active: isClicked,\n            hidden: !isClicked\n        }\">\n            <ng-content select = \".body\"></ng-content>\n        </div>\n    </div>\n            ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map