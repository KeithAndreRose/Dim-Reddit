import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from "@angular/core";
import { RedditService } from "src/app/services/reddit.service";

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

  constructor(private reddit: RedditService) {

  }

  ngOnInit() {
    return
    const permalink = `http://reddit.com${this.threadURL.slice(0, -1)}.json`;
    this.reddit.getThread(permalink)
      .then(response => response.json())
      .then(json => {
        const thread = json[0].data.children[0].data;
        const post = { thread, comments: [] };
        json[1].data.children.forEach(e => post.comments.push(e.data));
        this.thread = post.thread;
        this.comments = post.comments;
      });
  }

  toggleInfoElemLock(isIntersecting) {
    const elem = this.infoElem.nativeElement
    if (isIntersecting) elem.classList.add('locked')
    else elem.classList.remove('locked')
  }

  @HostListener("window:scroll", ["$event"])
  onScroll = (event) => {
    const d = {
      currentOffset: window.scrollY,
      targetOffset: (this.commentsElem.nativeElement.offsetTop - window.innerHeight + 100)
    };

    console.log(d, d.currentOffset > d.targetOffset)

    if(d.targetOffset < 320) return

    if (d.currentOffset > d.targetOffset) this.infoElem.nativeElement.classList.add('locked');
    else this.infoElem.nativeElement.classList.remove('locked');
  }

}
