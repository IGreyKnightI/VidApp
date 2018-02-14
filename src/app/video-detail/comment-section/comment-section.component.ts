import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ViewChild } from '@angular/core';
import { videoComment } from './comment.model';
import { CommentSectionService } from '../comment-section.service';
import { VideoItem } from '../../videos/video';
import {ActivatedRoute} from '@angular/router';
import { VideoService } from '../../videos/videos.service';







@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @ViewChild('f') csForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: videoComment;
  slug:string;
  private routeSub:any;
  private req:any;
  video: VideoItem;
  comments: videoComment[];
  specComments: videoComment[];
  
  
  
  

  constructor(
    private csService: CommentSectionService,
    private route: ActivatedRoute, 
    private _video:VideoService) { }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      
      this.slug = params['slug']
      console.log(this.slug);

      this.req = this._video.get(this.slug).subscribe(data=>{
        this.video = data as VideoItem
        })
      });

    this.subscription = this.csService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.csService.getComment(index);
        this.csForm.setValue({
          name: this.editedItem.name,
          comment: this.editedItem.comment
        })

      }
    );

    this.comments = this.csService.getComments();
    this.subscription = this.csService.commentsChanged
    .subscribe(
      (comments: videoComment[]) => {
        this.comments = comments;
        
      }
    );
  
  }


  /* filter() {
    this.specComments = [];
   for(let comment of this.comments) {
     if (this.slug == comment.belongingVid){
        this.specComments.push(comment)
        console.log(this.specComments)
      
       
      //this.comments.push(this.specComments);
     }
   }} */
 

  onSubmit(form: NgForm){

    const value = form.value;
    
    
    const newComment = new videoComment(value.name, value.comment, this.slug);
    
    if(this.editMode){
      this.csService.updateComment(this.editedItemIndex, newComment)
    } else {
      this.csService.addComment(newComment);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.csForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.csService.deleteComment(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}