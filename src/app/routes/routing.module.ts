import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../components/home/home.component';
import {AboutUsComponent} from '../components/about-us/about-us.component';
import {CoursesComponent} from '../components/courses/courses.component';
import {ContactUsComponent} from '../components/contact-us/contact-us.component';


const RoutesMap: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cources', component: CoursesComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(RoutesMap)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {}
