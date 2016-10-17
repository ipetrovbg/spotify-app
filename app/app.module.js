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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var artists_component_1 = require('./artists/artists.component');
var search_box_component_1 = require('./search-box/search-box.component');
var forms_1 = require('@angular/forms');
var filter_pipe_1 = require('./artists/filter.pipe');
var shorter_pipe_1 = require('./filters/shorter.pipe');
var forms_2 = require('@angular/forms');
var modal_1 = require('./modal/modal');
var router_1 = require('@angular/router');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var home_component_1 = require('./home/home.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_2.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                router_1.RouterModule.forRoot([
                    { path: 'modal', component: modal_1.Ng2Modal },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: '', component: home_component_1.HomeComponent },
                    {
                        path: '**',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    },
                ])
            ],
            declarations: [app_component_1.AppComponent, artists_component_1.ArtistComponent, search_box_component_1.SearchBox, filter_pipe_1.HasImage, shorter_pipe_1.Shorter, modal_1.Ng2Modal, home_component_1.HomeComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map