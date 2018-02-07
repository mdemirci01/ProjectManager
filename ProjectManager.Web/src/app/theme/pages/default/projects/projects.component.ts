import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
    selector: "projects",
    templateUrl: "./projects.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {
        this._script.loadScripts('projects',
            ['assets/demo/default/custom/components/datatables/base/projects-ajax.js']);

    }

}