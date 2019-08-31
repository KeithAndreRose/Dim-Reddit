import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  currentSubreddit = '';
  resData = [];

  constructor() {
    const defaultSubreddit = 'gonewild';
    this.getSubreddit(defaultSubreddit);
  }

  getSubreddit(subreddit) {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => {
        const items = json.data.children;
        console.log(items);
        items.forEach(element => this.resData.push(element.data));
        this.currentSubreddit = subreddit;
      });
  }

  getThread(permalink) {
    const url = `https://cors-anywhere.herokuapp.com/${permalink}`;
    return fetch(`${url}`)
  }
}
