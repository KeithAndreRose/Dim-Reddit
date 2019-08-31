import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  threadURL;

  constructor(public reddit: RedditService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.get('permalink')){
      }
      else{
      }
    })
  }

  targetPost(post) {
    this.threadURL = post;
  }
}
