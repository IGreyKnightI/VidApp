import { Subject } from 'rxjs/Subject';
import { aboutComment } from './comment.model';


export class CommentSectionService {
    commentsChanged = new Subject<aboutComment[]>();
    startedEditing = new Subject<number>();
    private comments: aboutComment[] =[
        
       
        new aboutComment('Nik', 'Good'),
        new aboutComment('Tom', 'Great'),
        new aboutComment('Tom', 'Bad'),
        new aboutComment('Tom', '3 is Bad'),
      ];

      setComments (comments: aboutComment[]) {

        this.comments = comments;
        this.commentsChanged.next(this.comments.slice());
      }

      getComments() {
          return this.comments.slice();
      }

      getComment(index: number) {
          return this.comments[index];
      }

      addComment(comment: aboutComment){
          this.comments.push(comment);
          this.commentsChanged.next(this.comments.slice())
      }

      addComments(comments: aboutComment[]) {
        //    for (let ingredient of ingredients) {
        //        this.addIngredient(ingredient)
        //    }

        this.comments.push(...comments);
        this.commentsChanged.next(this.comments.slice())
      }

      updateComment(index: number, newAboutComment: aboutComment){
          this.comments[index] = newAboutComment;
          this.commentsChanged.next(this.comments.slice());
      }

      deleteComment(index: number) {
          this.comments.splice(index, 1);
          this.commentsChanged.next(this.comments.slice());
      }
}