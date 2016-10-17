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
var Shorter = (function () {
    function Shorter() {
    }
    Shorter.prototype.transform = function (value, limit, pref) {
        if (!limit)
            limit = 50;
        if (!pref)
            pref = '';
        if (value) {
            if (limit > value.length) {
                return value;
            }
            else {
                if (pref) {
                    return value.slice(0, limit) + pref;
                }
            }
        }
    };
    Shorter = __decorate([
        core_1.Pipe({
            name: 'shorter'
        }), 
        __metadata('design:paramtypes', [])
    ], Shorter);
    return Shorter;
}());
exports.Shorter = Shorter;
//# sourceMappingURL=shorter.pipe.js.map