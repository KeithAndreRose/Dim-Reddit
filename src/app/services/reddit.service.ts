import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  currentSubreddit = '';
  resData = [];

  constructor() {
    const defaultSubreddit = 'pics';
    this.getSubreddit(defaultSubreddit);
  }

  getSubreddit(subreddit) {
    this.resData = [];
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => {
        const items = json.data.children;
        console.log(items);
        items.forEach(element => this.resData.push(element.data));
        this.currentSubreddit = subreddit;
      });
  }

  getThread(threadId) {
    const url = `https://cors-anywhere.herokuapp.com/https://www.reddit.com/comments/${threadId}.json`;
    console.log(url)
    return fetch(`${url}`)
  }
}
