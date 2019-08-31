import { Component, OnInit, Input } from "@angular/core";
import { RedditService } from "src/app/services/reddit.service";

@Component({
  selector: "reddit-thread",
  templateUrl: "./reddit-thread.component.html",
  styleUrls: ["./reddit-thread.component.scss"]
})
export class RedditThreadComponent implements OnInit {
  @Input() threadURL: string;
  thread;
  comments = [];

  constructor(private reddit: RedditService) { }

  ngOnInit() {
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
}
