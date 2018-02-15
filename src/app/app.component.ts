import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataStorageService } from '../shared/data-storage.service';
import {Response } from '@angular/http';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'VidApp';
  private routeSub:any;
  query: string;

  constructor(private route:ActivatedRoute, 
              private dataStorageService: DataStorageService,
              private authService: AuthService) {

  }


  ngOnInit() {
      firebase.initializeApp({
        apiKey: "AIzaSyBOlPGX1JLgj28scbiISJPKmNU-dJ-V__M",
        authDomain: "ng-vid-app.firebaseapp.com"
      });




    
    
    this.routeSub= this.route.params.subscribe(params=>{
      this.query = params ['q']
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }


  onLogout() {
    this.authService.logout();
  }

// save data to firebase
  onSaveData(){

    this.dataStorageService.storeComments()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  
  }


  onFetchData() {
    this.dataStorageService.getComments();
  }
}

// ng g component Name




