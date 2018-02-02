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
var helpers_1 = require("../helpers");
var script_loader_service_1 = require("../_services/script-loader.service");
var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js'], true)
            .then(function (result) {
            helpers_1.Helpers.setLoading(false);
            // optional js to be loaded once
            _this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js']);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof router_1.NavigationStart) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                mApp.scrollTop();
                helpers_1.Helpers.setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof router_1.NavigationEnd) {
                // init required js
                mApp.init();
                mUtil.init();
                helpers_1.Helpers.setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    ThemeComponent = __decorate([
        core_1.Component({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            templateUrl: "./theme.component.html",
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [script_loader_service_1.ScriptLoaderService, router_1.Router])
    ], ThemeComponent);
    return ThemeComponent;
}());
exports.ThemeComponent = ThemeComponent;
//# sourceMappingURL=theme.component.js.map