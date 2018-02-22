import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { CommentSectionService } from "../app/about/comment-section/comment-section.service";
import { aboutComment } from "../app/about/comment-section/comment.model";
import { AuthService } from "../app/auth/auth.service";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private csService: CommentSectionService, private authService: AuthService) { }

    storeComments() {
        const token = this.authService.getToken();
       return this.http.put('https://ng-vid-app.firebaseio.com/comments.json?auth=' + token, this.csService.getComments());
    }

    getComments() {
        const token = this.authService.getToken();
        this.authService.getToken();
        this.http.get('https://ng-vid-app.firebaseio.com/comments.json?auth=' + token)
        .subscribe(
            (response: Response) => {
                const comments: aboutComment[] = response.json();
                this.csService.setComments(comments);
            }
        );
    }


}