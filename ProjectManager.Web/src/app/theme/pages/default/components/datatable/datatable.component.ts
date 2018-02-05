import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
@Component({
    selector: "datatable",
    templateUrl: "./datatable.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class    DataTableComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('datatable',
            ['assets/demo/default/custom/components/datatables/scrolling/vertical.js']);

    }

}