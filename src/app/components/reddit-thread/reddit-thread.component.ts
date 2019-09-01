import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from "@angular/core";
import { RedditService } from "src/app/services/reddit.service";
import { ActivatedRoute } from '@angular/router';
import { MarkdownParserService } from 'src/app/services/markdown-parser.service';

@Component({
  selector: "reddit-thread",
  templateUrl: "./reddit-thread.component.html",
  styleUrls: ["./reddit-thread.component.scss"]
})
export class RedditThreadComponent implements OnInit {

  @ViewChild('infoElem', { static: false })
  infoElem: ElementRef<HTMLElement>;

  @ViewChild('commentsElem', { static: false })
  commentsElem: ElementRef<HTMLElement>;
  commentObserver;

  @Input() threadURL: string;

  thread = {};
  comments = [];

  constructor(
    private reddit: RedditService,
    private route: ActivatedRoute,
    public md: MarkdownParserService
  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        this.fetchThread(id);
    })
  }

  fetchThread(threadId) {
    this.reddit.getThread(threadId)
      .then(response => response.json())
      .then(json => {
        const thread = json[0].data.children[0].data;
        const post = { thread, comments: [] };
        json[1].data.children.forEach(e => post.comments.push(e.data));
        this.thread = post.thread;
        this.comments = post.comments;
        console.log(post)
      });
  }

  toggleInfoElemLock(isIntersecting) {
    const elem = this.infoElem.nativeElement
    if (isIntersecting) elem.classList.add('locked')
    else elem.classList.remove('locked')
  }

  @HostListener("window:scroll", ["$event"])
  onScroll = (event) => {
    if (window.scrollY > 320) this.infoElem.nativeElement.classList.add('locked');
    else this.infoElem.nativeElement.classList.remove('locked');
  }

}
