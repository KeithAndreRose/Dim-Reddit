import { Component, OnInit, Input } from '@angular/core';
import { MarkdownParserService } from 'src/app/services/markdown-parser.service';
import { RedditLink } from 'src/app/models/reddit-link.model';

@Component({
  selector: 'reddit-postcard',
  templateUrl: './reddit-postcard.component.html',
  styleUrls: ['./reddit-postcard.component.scss']
})
export class RedditPostcardComponent implements OnInit {
  @Input() post:RedditLink;

  today = new Date();
  corsProxy = (url)=> `https://cors-anywhere.herokuapp.com/${url}`;

  constructor(public md: MarkdownParserService) { }

  ngOnInit() {
    // console.log(this.post)
  }

}
