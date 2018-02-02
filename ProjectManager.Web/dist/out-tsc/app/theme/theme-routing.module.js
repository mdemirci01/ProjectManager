"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var theme_component_1 = require("./theme.component");
var router_1 = require("@angular/router");
var auth_guard_1 = require("../auth/_guards/auth.guard");
var routes = [
    {
        'path': '',
        'component': theme_component_1.ThemeComponent,
        'canActivate': [auth_guard_1.AuthGuard],
        'children': [
            {
                'path': 'index',
                'loadChildren': '.\/pages\/default\/blank\/blank.module#BlankModule',
            },
            {
                'path': '',
                'redirectTo': 'index',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'index',
        'pathMatch': 'full',
    },
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());
exports.ThemeRoutingModule = ThemeRoutingModule;
//# sourceMappingURL=theme-routing.module.js.map