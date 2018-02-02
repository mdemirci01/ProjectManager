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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var helpers_1 = require("./helpers");
var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof router_1.NavigationStart) {
                helpers_1.Helpers.setLoading(true);
                helpers_1.Helpers.bodyClass(_this.globalBodyClass);
            }
            if (route instanceof router_1.NavigationEnd) {
                helpers_1.Helpers.setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'body',
            templateUrl: './app.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map