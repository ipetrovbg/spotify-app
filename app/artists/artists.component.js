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
var spotify_service_1 = require('./spotify.service');
var globals = require('../globals');
var ArtistComponent = (function () {
    function ArtistComponent(dataService) {
        this.dataService = dataService;
        this.artists = [];
        this.items = 10;
        this.name = 'Maroon 5';
        this.artistValue = 'Maroon 5';
        this.artistChange = new core_1.EventEmitter();
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .fetchArtists(this.name, this.items)
            .subscribe(function (response) { return _this.artists = response.artists.items; });
    };
    ArtistComponent.prototype.change = function (e) {
        var _this = this;
        this.dataService
            .fetchArtists(e.target.value, this.items)
            .subscribe(function (response) { return _this.artists = response.artists.items; });
        console.log(this.artistValue);
        this.artistChange.emit({
            value: e.target.value
        });
    };
    __decorate([
        core_1.Input("items"), 
        __metadata('design:type', Object)
    ], ArtistComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input("name"), 
        __metadata('design:type', String)
    ], ArtistComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input("artistValue"), 
        __metadata('design:type', String)
    ], ArtistComponent.prototype, "artistValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ArtistComponent.prototype, "artistChange", void 0);
    ArtistComponent = __decorate([
        core_1.Component({
            selector: 'artist',
            templateUrl: globals.appUri + '/artists/templates/artists.component.tpl.html',
            styleUrls: ['app/artists/styles/artists.components.css',],
        }), 
        __metadata('design:paramtypes', [spotify_service_1.SpotifyService])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artists.component.js.map