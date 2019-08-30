import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'reddit-thread',
  templateUrl: './reddit-thread.component.html',
  styleUrls: ['./reddit-thread.component.scss']
})
export class RedditThreadComponent implements OnInit {
  @Input() thread;
  constructor() { }

  ngOnInit() {
    console.log(this.thread)
  }

}
