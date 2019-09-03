import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { MarkdownParserService } from 'src/app/services/markdown-parser.service';
import { redditThread } from 'src/app/services/reddit.service';

@Component({
  selector: 'reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.scss']
})
export class RedditPostComponent implements OnInit {
  @Input() post:redditThread;
  corsProxy = (url)=> `https://cors-anywhere.herokuapp.com/${url}`;

  constructor(public md: MarkdownParserService) { }

  ngOnInit() {
  }

}
