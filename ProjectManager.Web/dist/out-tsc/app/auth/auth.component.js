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
var script_loader_service_1 = require("../_services/script-loader.service");
var authentication_service_1 = require("./_services/authentication.service");
var alert_service_1 = require("./_services/alert.service");
var user_service_1 = require("./_services/user.service");
var alert_component_1 = require("./_directives/alert.component");
var login_custom_1 = require("./_helpers/login-custom");
var helpers_1 = require("../helpers");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        this._script.loadScripts('body', [
            'assets/vendors/base/vendors.bundle.js',
            'assets/demo/default/base/scripts.bundle.js'
        ], true).then(function () {
            helpers_1.Helpers.setLoading(false);
            login_custom_1.LoginCustom.init();
        });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.model.email, this.model.password).subscribe(function (data) {
            _this._router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.showAlert('alertSignin');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._userService.create(this.model).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Thank you. To complete your registration please check your email.', true);
            _this.loading = false;
            login_custom_1.LoginCustom.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertSignup');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.forgotPass = function () {
        var _this = this;
        this.loading = true;
        this._userService.forgotPassword(this.model.email).subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
            _this.loading = false;
            login_custom_1.LoginCustom.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertForgotPass');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(alert_component_1.AlertComponent);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    __decorate([
        core_1.ViewChild('alertSignin', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        core_1.ViewChild('alertSignup', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        core_1.ViewChild('alertForgotPass', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = __decorate([
        core_1.Component({
            selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
            templateUrl: './templates/login-1.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [router_1.Router,
            script_loader_service_1.ScriptLoaderService,
            user_service_1.UserService,
            router_1.ActivatedRoute,
            authentication_service_1.AuthenticationService,
            alert_service_1.AlertService,
            core_1.ComponentFactoryResolver])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map