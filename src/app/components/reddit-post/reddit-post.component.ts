import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.scss']
})
export class RedditPostComponent implements OnInit {
  @Input() post;
  constructor() { }

  ngOnInit() {
  }

}
