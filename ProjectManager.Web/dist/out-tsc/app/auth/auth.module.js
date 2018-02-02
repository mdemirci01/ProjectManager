"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var auth_routing_routing_1 = require("./auth-routing.routing");
var auth_component_1 = require("./auth.component");
var alert_component_1 = require("./_directives/alert.component");
var logout_component_1 = require("./logout/logout.component");
var auth_guard_1 = require("./_guards/auth.guard");
var alert_service_1 = require("./_services/alert.service");
var authentication_service_1 = require("./_services/authentication.service");
var user_service_1 = require("./_services/user.service");
var index_1 = require("./_helpers/index");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                auth_component_1.AuthComponent,
                alert_component_1.AlertComponent,
                logout_component_1.LogoutComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                auth_routing_routing_1.AuthRoutingModule,
            ],
            providers: [
                auth_guard_1.AuthGuard,
                alert_service_1.AlertService,
                authentication_service_1.AuthenticationService,
                user_service_1.UserService,
                // api backend simulation
                index_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_1.BaseRequestOptions,
            ],
            entryComponents: [alert_component_1.AlertComponent],
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map