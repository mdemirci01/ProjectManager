import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataTableComponent } from '../components/datatable/datatable.component';


@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}