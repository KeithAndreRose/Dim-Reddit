import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {

  @ViewChild('feedBottom', {static: false})
  feedBottom: ElementRef<HTMLElement>;

  observer = new IntersectionObserver((e)=>{
    if(e[0].isIntersecting) this.reddit.queryMore();
  })

  constructor(
    public reddit: RedditService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.route.paramMap.subscribe(params => {
      const subreddits = params.get('subreddits');
      if(!subreddits) return this.reddit.getBest();
      this.reddit.getSubreddit(subreddits);
    })
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const elem = this.feedBottom.nativeElement as Element
    this.observer.observe(elem)
  }
}
