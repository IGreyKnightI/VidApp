import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router/';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {

  id: number;
  editMode = false;
  cvideoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private VideoService: VideoService,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        
      }
    );
  }

  onSubmit() {
    //const newRecipe = new Recipe(
      // this.recipeForm.value['name'], 
      // this.recipeForm.value['description'],
      // this.recipeForm.value['imagePath'],
      // this.recipeForm.value['ingredients']); 
   // if(this.editMode) {
    //  this.VideoService.updateVideo(this.id, this.cvideoForm.value);
   // }else {
      this.VideoService.addVideo(this.cvideoForm.value);
   // }
    this.onCancel();
    
  }

  onCancel() {

    this.router.navigate(['../'], {relativeTo: this.route});
  
  }

  private initForm() {

    let vidSlug = '';
    let vidName = '';
    let vidEmbed = '';
    
    let vidDescription = '';
    

    // if(this.editMode) {
    //   const recipe = this.recipeService.getRecipe(this.id)
    //   recipeName = recipe.name;
    //   recipeImagePath = recipe.imagePath;
    //   recipeDescription = recipe.description;
    //   if(recipe['ingredients']) {
    //     for (let ingredient of recipe.ingredients) {
    //       recipeIngredients.push(
    //         new FormGroup({
    //           'name': new FormControl(ingredient.name, Validators.required),
    //           'amount': new FormControl(ingredient.amount, [
    //             Validators.required,
    //             Validators.pattern(/[1-9]+[0-9]*$/)
    //           ])
              
    //         })
    //       );
    //     }
    //   }
    // }

    this.cvideoForm = new FormGroup({
      'slug': new FormControl(vidSlug, Validators.required),
      'name': new FormControl(vidName, Validators.required),
      'embed': new FormControl(vidEmbed, Validators.required),
      
      
      'description': new FormControl(vidDescription, Validators.required),
      
      
    });

  }

}
/* <div class="row">
  <div class="col-xs-12">
    <form [formGroup]="cvideoForm" (ngSubmit)="onSubmit()">
      <div class="row">
        <div class="col-xs-12">
          <button 
          type="submit" 
          class="btn btn-success"
          [disabled]="!cvideoForm.valid">Save</button>
          <button type="button" class="btn btn-danger" (click)= "onCancel()">Cancel</button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
            type="text" 
            id="name"
            formControlName="name"
            class="form-control">
          </div>
        </div>
      </div>



      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="embed">Video URL</label>
            <input 
            type="text" 
            id="embed"
            formControlName="vidURL"
            class="form-control">
          </div>
        </div>
      </div>

      



      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
            type="text" 
            id="description"
            class="form-control"
            formControlName="description"
            rows="6"
            ></textarea>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label for="slug">slug</label>
            <input 
            type="text" 
            id="slug"
            formControlName="slug"
            class="form-control">
          </div>
        </div>
      </div>


    </form>
  </div>
</div>

    */
    
    
   
    