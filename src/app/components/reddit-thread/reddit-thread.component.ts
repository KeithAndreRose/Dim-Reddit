import { RedditComment } from './../../models/reddit-comment.model';
import { RedditLink } from './../../models/reddit-link.model';
import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from "@angular/core";
import { RedditService } from "src/app/services/reddit.service";
import { ActivatedRoute } from '@angular/router';
import { MarkdownParserService } from 'src/app/services/markdown-parser.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: "reddit-thread",
  templateUrl: "./reddit-thread.component.html",
  styleUrls: ["./reddit-thread.component.scss"]
})
export class RedditThreadComponent implements OnInit {
  corsProxy = (url)=> `https://cors-anywhere.herokuapp.com/${url}`;

  @ViewChild('infoElem', { static: false })
  infoElem: ElementRef<HTMLElement>;

  @ViewChild('commentsElem', { static: false })
  commentsElem: ElementRef<HTMLElement>;
  commentObserver;

  @Input() threadURL: string;

  thread: RedditLink;
  comments : RedditComment[];
  prefetched: true | RedditLink;

  constructor(
    public reddit: RedditService,
    private route: ActivatedRoute,
    public md: MarkdownParserService,
    private title:Title
  ) {
    this.route.paramMap.subscribe(params => {
      const subreddit = params.get('subreddit');
      const id = params.get('id');

      //-------------------------------------------\
      // If data is stored in service state, use it.
      // 
      this.prefetched = this.reddit.findInFeed(id) as RedditLink
      if (this.prefetched) {
        this.thread = this.prefetched ;
        return this.fetchOnlyComments(subreddit, id);
      }
      //-------------------------------------------------------/
      this.fetchThread(subreddit, id);
    })

  }

  ngOnInit() {
    
  }

  async fetchThread(subreddit, id) {
    const fetch = await this.reddit.getThread(subreddit, id);
    this.thread = fetch.thread;
    this.comments = fetch.comments;
    this.title.setTitle(`r/${this.thread['subreddit']} | ${this.thread['title']}`);
  }

  async fetchOnlyComments(subreddit, id) {
    const fetch = await this.reddit.getThread(subreddit, id);
    this.comments = fetch.comments;
    this.title.setTitle(`r/${this.thread['subreddit']} | ${this.thread['title']}`);
  }

  toggleInfoElemLock(isIntersecting) {
    const elem = this.infoElem.nativeElement
    if (isIntersecting) elem.classList.add('locked')
    else elem.classList.remove('locked')
  }

  @HostListener("window:scroll", ["$event"])
  onScroll = (event) => {
    if (window.scrollY > 120) this.infoElem.nativeElement.classList.add('locked');
    else this.infoElem.nativeElement.classList.remove('locked');
  }

}
