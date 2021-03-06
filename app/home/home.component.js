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
var spotify_service_1 = require('../services/spotify.service');
require('rxjs/Rx');
var HomeComponent = (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        /* set some default values */
        this.artist = 'Lady Gaga';
        this.items = 20;
        this.artists = [];
        this.loader = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .fetchArtists(this.artist, this.items)
            .subscribe(function (response) { return _this.artists = response.artists.items; });
    };
    HomeComponent.prototype.refresh = function (e) {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.dataService
                .fetchArtists(e.value, _this.items)
                .subscribe(function (response) {
                _this.loader = false;
                _this.artists = response.artists.items || [{ name: "no data", images: [{}] }];
            }, function (error) {
                _this.loader = false;
                _this.errorMessage = error;
            });
        }, 100);
    };
    HomeComponent.prototype.onKeyup = function (e) {
        if (e.value.length === 0) {
            e.value = 'asfd654as6dc5scsasdfsdfvsdfvd651asdfcsdc616sdcsd6c1d6f5c1asfdsdasas6d4cas6dc4s6d54c';
        }
        this.refresh(e);
    };
    HomeComponent.prototype.afterClearQuery = function (event) {
        /*change empty value to some very long string and pass it as artist name. The goal is to can`t find anything*/
        event.value = 'asfd654as6dc5scsasdfsdfvsdfvd651asdfcsdc616sdcsd6c1d6f5c1asfdsdasas6d4cas6dc4s6d54c';
        this.refresh(event);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            moduleId: module.id,
            templateUrl: 'home.entryComponents.tpl.html',
            providers: [spotify_service_1.SpotifyService],
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map