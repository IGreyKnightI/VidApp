import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/videos.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
  
  private req: any;
  title = "Video list";
  // someItem = "<h1>Hi </h1>"
  // todayDate;
  videoList: [VideoItem];

  constructor(private _video:VideoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.todayDate = new Date()

    this.req = this._video.list().subscribe(data=>{
     
      this.videoList = data as  [VideoItem];
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }

  onNewVideo() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  

}
//FZvaOg4RKHQ
//{{ todayDate | date:"dd/MM/yy"}}
// <div [innerHTML]= 'item.embed'></div>
// <div [innerHTML]= 'someItem'></div>