import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RedditComment } from 'src/app/models/reddit-comment.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'thread-comments',
  templateUrl: './thread-comments.component.html',
  styleUrls: ['./thread-comments.component.scss']
})
export class ThreadCommentsComponent implements OnInit, OnDestroy {

  @Input() options = {}
  @Input() comments: RedditComment[] | RedditComment;

  parameters: Subscription;

  constructor(private route:ActivatedRoute) {
  }
  
  ngOnInit() {
    // TODO: Get thread name and comment context from route
    this.parameters = this.route.paramMap.subscribe(param => {
      if(param.get("commentContext")) return
    })
  }

  ngOnDestroy() {
    this.parameters.unsubscribe();
  }


}
