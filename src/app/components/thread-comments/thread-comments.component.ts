import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RedditComment } from 'src/app/models/reddit-comment.model';
import { Subscription } from 'rxjs';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'thread-comments',
  templateUrl: './thread-comments.component.html',
  styleUrls: ['./thread-comments.component.scss']
})
export class ThreadCommentsComponent implements OnInit, OnDestroy {

  @Input() options = {}
  @Input() comments: RedditComment[] | RedditComment;

  parameters: Subscription;

  constructor(private reddit: RedditService) {
    
  }
  
  ngOnInit() {
    // TODO: Get thread name and comment context from route
    const id = this.reddit.state.route.split('/')[5]
    console.log(id)
    if(id) console.log("Viewing replies of", id)
    else console.log("Viewing surface level comments")
  }

  ngOnDestroy() {
    // this.parameters.unsubscribe();
  }


}
