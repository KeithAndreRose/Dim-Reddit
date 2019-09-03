import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { RedditService } from 'src/app/services/reddit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(public reddit: RedditService, private router: Router) { }

  ngOnInit() {
  }

  goToSubreddit(value){
    this.router.navigate(['/r',value])
  }


}
