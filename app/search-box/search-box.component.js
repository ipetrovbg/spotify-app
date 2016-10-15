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
var core_1 = require('@angular/core');
var SearchBox = (function () {
    function SearchBox() {
        this.text = 'Search';
        this.width = '100%';
        this.borderColor = 'black';
        this.padding = 5;
        this.showClearBtn = false;
        this.searchChange = new core_1.EventEmitter();
        this.afterClear = new core_1.EventEmitter();
    }
    SearchBox.prototype.ngOnInit = function () {
        if (this.searchQuery.length > 0) {
            this.showClearBtn = true;
        }
    };
    SearchBox.prototype.onKey = function (event) {
        var _this = this;
        this.searchChange.emit({
            value: this.searchQuery
        });
        setTimeout(function () {
            if (event.target.value.length > 0) {
                _this.showClearBtn = true;
            }
            else {
                _this.showClearBtn = false;
            }
        }, 300);
    };
    SearchBox.prototype.onClear = function () {
        this.searchQuery = '';
        this.afterClear.emit({
            value: this.searchQuery
        });
    };
    __decorate([
        core_1.Input('placeholder'), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "text", void 0);
    __decorate([
        core_1.Input('width'), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "width", void 0);
    __decorate([
        core_1.Input('borderColor'), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "borderColor", void 0);
    __decorate([
        core_1.Input('padding'), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "padding", void 0);
    __decorate([
        core_1.Input("searchQuery"), 
        __metadata('design:type', String)
    ], SearchBox.prototype, "searchQuery", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "searchChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "afterClear", void 0);
    SearchBox = __decorate([
        core_1.Component({
            selector: 'search-box',
            template: "\n    <div class=\"search-box-component\"\n        [style.width]=\"width\"        \n    >\n        <input \n            [(ngModel)]=\"searchQuery\"\n            (keyup)=\"onKey($event)\"\n            [style.padding]=\"padding\"\n            [style.borderColor]=\"borderColor\"\n            placeholder=\"{{ text }}\">\n        <button \n            (click)=\"onClear()\"\n            *ngIf=\"showClearBtn\"\n            [style.padding]=\"padding\">x</button>\n    </div>\n  ",
            styleUrls: ['./app/search-box/css/search-box.min.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
//# sourceMappingURL=search-box.component.js.map