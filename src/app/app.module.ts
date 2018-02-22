import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


//third party
import { BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';




import { AppComponent } from './app.component';
import { AppRoutingModule} from './app.routing';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SafePipe } from './utility/safe.pipe';
import { DropdownDirective } from '../shared/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { VideoEditComponent } from './video-edit/video-edit.component';
import { CommentSectionComponent } from './about/comment-section/comment-section.component';
import { CommentSectionService } from './about/comment-section/comment-section.service';
import { AboutComponent } from './about/about.component';
import { DataStorageService } from '../shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    DropdownDirective,
    HomeComponent,
    SearchComponent,
    SearchDetailComponent,
    VideoEditComponent,
    CommentSectionComponent,
    AboutComponent,
    SignupComponent,
    SigninComponent,
    
    
  ],
  imports: [
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule

  ],
  providers: [CommentSectionService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
