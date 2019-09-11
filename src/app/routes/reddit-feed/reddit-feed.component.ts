import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.scss']
})
export class RedditFeedComponent implements OnInit, AfterViewInit {

  @ViewChild('feedBottom', {static: false})
  feedBottom: ElementRef<HTMLElement>;


  observer = new IntersectionObserver((e)=>{
    if(e[0].isIntersecting) this.reddit.queryMore();
  })
  

  constructor(
    public reddit: RedditService,
    private title:Title
    ) {}

  ngOnInit() {
    const state = this.reddit.state
    const subreddit = state.route.split('/')[2]
    if(state.lastSubreddit === 'best' && state.route.split('/')[3]) return;
    if(!subreddit) return this.reddit.getBest()
    console.log(subreddit)
    this.reddit.getSubreddit(subreddit);
    this.title.setTitle(subreddit);
  }

  ngAfterViewInit(): void {
    const elem = this.feedBottom.nativeElement as Element
    this.observer.observe(elem)
  }

}
