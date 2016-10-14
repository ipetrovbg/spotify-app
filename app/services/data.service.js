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
var http_1 = require('@angular/http');
var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
    }
    SpotifyService.prototype.fetchArtists = function (q) {
        var query = q;
        return this.http.get('https://api.spotify.com/v1/search?q=' + query + '&limit=20&type=artist')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data.artists.items); });
    };
    SpotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=data.service.js.map