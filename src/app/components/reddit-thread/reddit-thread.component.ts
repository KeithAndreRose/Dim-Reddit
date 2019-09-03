import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from "@angular/core";
import { RedditService, redditThread } from "src/app/services/reddit.service";
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

  thread: redditThread;
  comments = [];
  prefetched: true;

  constructor(
    public reddit: RedditService,
    private route: ActivatedRoute,
    public md: MarkdownParserService,
    private title:Title
  ) {
    this.route.paramMap.subscribe(params => {
      const subreddit = params.get('subreddit');
      const id = params.get('id');

      this.prefetched = this.reddit.findInFeed(id)
      if (this.prefetched) {
        this.thread = this.prefetched as redditThread;
        return this.fetchOnlyComments(subreddit, id);
      }
      this.fetchThread(subreddit, id);
    })

  }

  ngOnInit() {
  }

  fetchThread(subreddit, id) {
    this.reddit.getThread(subreddit, id).then(response => response.json())
      .then(json => {
        const thread = json[0].data.children[0].data;
        const comments = [];
        json[1].data.children.forEach(e => comments.push(e.data));
        this.thread = thread;
        this.comments = comments;
        console.log({ thread, comments })
        this.title.setTitle(`r/${this.thread['subreddit']} | ${this.thread['title']}`);
      });
  }

  fetchOnlyComments(subreddit, id) {
    this.comments = [];
    this.reddit.getThread(subreddit, id).then(response => response.json())
      .then(json => {
        const comments = [];
        json[1].data.children.forEach(e => comments.push(e.data));
        this.comments = comments;
        console.log({thread: this.thread, comments })
        this.title.setTitle(`r/${this.thread['subreddit']} | ${this.thread['title']}`);

      });
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
