import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { VideoEditComponent } from './video-edit/video-edit.component';

const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent,
    },

    {
        path:"search",
        component: SearchDetailComponent,
    },

    {
        path:"videos",
        component: VideoListComponent,
    },
    {
        path: 'videos/new', component: VideoEditComponent

    },
    {
        path:"videos/:slug",
        component: VideoDetailComponent,
    },
    
    {
        path: ':slug/edit',  component: VideoEditComponent
    },

]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],

    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{}