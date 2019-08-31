import { Component, OnInit, Input } from "@angular/core";
import axios from "axios";

@Component({
  selector: "reddit-thread",
  templateUrl: "./reddit-thread.component.html",
  styleUrls: ["./reddit-thread.component.scss"]
})
export class RedditThreadComponent implements OnInit {
  @Input() threadURL: string;
  thread;
  comments = [];

  constructor() {}

  ngOnInit() {
    const permalink = `http://reddit.com${this.threadURL.slice(0, -1)}.json`;
    const url = `https://cors-anywhere.herokuapp.com/${permalink}`;
    console.log(`${url}`);

      fetch(`${url}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.thread = json[0].data.children[0].data;
        json[1].data.children.forEach(e => {
          this.comments.push(e.data)
        });
      })
  }
}
