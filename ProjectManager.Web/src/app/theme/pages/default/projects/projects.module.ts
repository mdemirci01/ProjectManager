import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { ProjectsComponent } from './projects.component';
import { DataTableComponent } from '../components/datatable/datatable.component';

const routes: Routes = [
    {
        'path': '',
        'component': DataTableComponent,
        'children': [
            {
                'path': '',
                'component': ProjectsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
       CommonModule, RouterModule.forChild(routes), LayoutModule,
    ], exports: [
        RouterModule,
    ], declarations: [
        ProjectsComponent,
        DefaultComponent
    ],
})
export class ProjectsModule {
}