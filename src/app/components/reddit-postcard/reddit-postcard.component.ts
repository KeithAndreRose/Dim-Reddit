import { Component, OnInit, Input } from '@angular/core';
import { MarkdownParserService } from 'src/app/services/markdown-parser.service';
import { redditThread } from 'src/app/services/reddit.service';

@Component({
  selector: 'reddit-postcard',
  templateUrl: './reddit-postcard.component.html',
  styleUrls: ['./reddit-postcard.component.scss']
})
export class RedditPostcardComponent implements OnInit {
  @Input() post:redditThread;
  corsProxy = (url)=> `https://cors-anywhere.herokuapp.com/${url}`;

  constructor(public md: MarkdownParserService) { }

  ngOnInit() {
  }

}
