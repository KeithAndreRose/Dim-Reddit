import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  state = {}
  feed = [];
  corsProxy = (url)=> `https://cors-anywhere.herokuapp.com/${url}`;


  constructor(private router:Router) {
  }

  findInFeed(id){
    const item = this.feed.find(post => post.id === id);
    if(item) this.setFeedIndex(id);
    return item
  }

  setFeedIndex(id){
    this.state['index'] = this.feed.findIndex(post => post.id === id);
  }

  getNextInFeed(){
    const i = this.state['index'] + 1;
    const thing = this.feed[i];
    this.router.navigate(['/r/', thing.subreddit,'comments',thing.id])
    console.log(i)
  }

  getPreviousInFeed(){
    const i = this.state['index'] - 1;
    const thing = this.feed[i];
    this.router.navigate(['/r/', thing.subreddit,'comments',thing.id])
    console.log(i)
  }

  getBest() {
    this.feed = [];
    const url = `https://www.reddit.com/best.json`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const items = json.data.children;
        items.forEach(element => this.feed.push(element.data));
        this.state['prefix'] = 'best';
        this.state['subreddit'] = '';
        this.state['jsonPath'] = url;
        this.state['lastThing'] = items[items.length - 1].data.name;
      });
  }

  // Example URL
  // https://www.reddit.com/r/PublicFreakout.json?count=25&after=t3_cyutpn
  // https://www.reddit.com/r/PublicFreakout/new.json
  getSubreddit(sub:string) {
    this.feed = [];
    const url = `https://www.reddit.com/r/${sub}.json`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const items = json.data.children;
        items.forEach(element => this.feed.push(element.data));
        this.state['prefix'] = `r/${sub}`;
        this.state['subreddit'] = sub;
        this.state['jsonPath'] = url;
        this.state['lastThing'] = items[items.length - 1].data.name;
      });
  }

  // Get the [Subreddit].json/?count=[Count]&after=[lastThing]
  queryMore(){
    if(!this.feed[0]) return
    const count = 25;
    const lastThing = this.state['lastThing']
    const prefix = this.state['prefix'];
    const url = `https://www.reddit.com/${prefix}.json?count=${count}&after=${lastThing}`
    fetch(url)
    .then(response => response.json())
    .then(json => {
      const items = json.data.children;
      items.forEach(element => this.feed.push(element.data));
      this.state['lastThing'] = items[items.length - 1].data.name;
    });
  }

  getThread(subreddit,id) {
    const url = `https://www.reddit.com/r/${subreddit}/comments/${id}.json`;
    return fetch(url)
  }
}
