import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  targetedPost;

  constructor(public reddit:RedditService) {
  }
  
  ngOnInit() {

  }

  targetPost(post){
    this.targetedPost = post;
  }

}
