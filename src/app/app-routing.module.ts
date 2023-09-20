import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OrgViewComponent } from './org-view/org-view.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Home page'
    },
    {
        path: 'org/:org',
        component: OrgViewComponent,
        title: 'Organization release page'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
