import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output('sideNavigationEvent')
  sideNavigationEvent = new EventEmitter<any>()

  constructor(public reddit: RedditService, private router: Router) { }

  ngOnInit() {
  }

  goToSubreddit = (value) => this.router.navigate(['/r',value])
  
  toggleMenu = () => this.sideNavigationEvent.emit()
}

