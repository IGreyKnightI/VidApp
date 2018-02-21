import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { VideoEditComponent } from './video-edit/video-edit.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    {path:"", component: HomeComponent,},

    {path:"search", component: SearchDetailComponent,},

    {path:"videos", component: VideoListComponent,},

    {path: 'videos/new', component: VideoEditComponent},

    {path:"videos/:slug", component: VideoDetailComponent,},
    
    {path: ':slug/edit', component: VideoEditComponent},

    {path:"about", component: AboutComponent},

    {path:"signup", component: SignupComponent},

    {path:"signin", component: SigninComponent}

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