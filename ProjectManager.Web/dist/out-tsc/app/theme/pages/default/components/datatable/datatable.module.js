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
var router_1 = require("@angular/router");
var datatable_component_1 = require("./datatable.component");
var layout_module_1 = require("../../../../layouts/layout.module");
var default_component_1 = require("../../default.component");
var routes = [
    {
        "path": "",
        "component": default_component_1.DefaultComponent,
        "children": [
            {
                "path": "",
                "component": datatable_component_1.DataTableComponent
            }
        ]
    }
];
var DataTableModule = /** @class */ (function () {
    function DataTableModule() {
    }
    DataTableModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, router_1.RouterModule.forChild(routes), layout_module_1.LayoutModule
            ], exports: [
                router_1.RouterModule
            ], declarations: [
                datatable_component_1.DataTableComponent
            ]
        })
    ], DataTableModule);
    return DataTableModule;
}());
exports.DataTableModule = DataTableModule;
//# sourceMappingURL=datatable.module.js.map