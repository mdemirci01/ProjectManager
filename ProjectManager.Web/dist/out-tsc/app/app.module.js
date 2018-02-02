"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var theme_component_1 = require("./theme/theme.component");
var layout_module_1 = require("./theme/layouts/layout.module");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var script_loader_service_1 = require("./_services/script-loader.service");
var theme_routing_module_1 = require("./theme/theme-routing.module");
var auth_module_1 = require("./auth/auth.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                theme_component_1.ThemeComponent,
                app_component_1.AppComponent,
            ],
            imports: [
                layout_module_1.LayoutModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                theme_routing_module_1.ThemeRoutingModule,
                auth_module_1.AuthModule,
            ],
            providers: [script_loader_service_1.ScriptLoaderService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map