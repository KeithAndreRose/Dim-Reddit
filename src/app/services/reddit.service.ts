import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  state = {
    subreddit: '',
    prefix: '',
    jsonPath: '',
    lastThing: '',
  }
  feed = [];
  corsProxy = (url) => `https://cors-anywhere.herokuapp.com/${url}`;


  constructor(private router: Router) {
  }

  findInFeed(id) {
    const item = this.feed.find(post => post.id === id);
    if (item) this.setFeedIndex(id);
    return item
  }

  setFeedIndex(id) {
    this.state['index'] = this.feed.findIndex(post => post.id === id);
  }

  getNextInFeed() {
    const i = this.state['index'] + 1;
    const thing = this.feed[i];
    this.router.navigate(['/r/', thing.subreddit, 'comments', thing.id])
    console.log(i)
  }

  getPreviousInFeed() {
    const i = this.state['index'] - 1;
    const thing = this.feed[i];
    this.router.navigate(['/r/', thing.subreddit, 'comments', thing.id])
    console.log(i)
  }

  getBest() {
    this.feed = [];
    const url = `https://www.reddit.com/best.json?raw_json=1`
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
  getSubreddit(sub: string) {
    this.feed = [];
    const url = `https://www.reddit.com/r/${sub}.json?raw_json=1`
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
  queryMore() {
    if (!this.feed[0]) return
    const count = 25;
    const lastThing = this.state['lastThing']
    const prefix = this.state['prefix'];
    const url = `https://www.reddit.com/${prefix}.json?count=${count}&after=${lastThing}&raw_json=1`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const items = json.data.children;
        items.forEach(element => this.feed.push(element.data));
        this.state['lastThing'] = items[items.length - 1].data.name;
      });
  }

  getThread(subreddit, id) {
    const url = `https://www.reddit.com/r/${subreddit}/comments/${id}.json?raw_json=1`;
    return fetch(url)
  }
}


export interface redditThread {
  all_awardings?: any,
  allow_live_comments?: any,
  approved_at_utc?: any,
  approved_by?: any,
  archived?: any,
  author?: any,
  author_flair_background_color?: any,
  author_flair_css_class?: any,
  author_flair_richtext?: any,
  length?: any,
  __proto__?: any,
  author_flair_template_id?: any,
  author_flair_text?: any,
  author_flair_text_color?: any,
  author_flair_type?: any,
  author_fullname?: any,
  author_patreon_flair?: any,
  banned_at_utc?: any,
  banned_by?: any,
  can_gild?: any,
  can_mod_post?: any,
  category?: any,
  clicked?: any,
  content_categories?: any,
  contest_mode?: any,
  created?: any,
  created_utc?: any,
  discussion_type?: any,
  distinguished?: any,
  domain?: any,
  downs?: any,
  edited?: any,
  gilded?: any,
  gildings?: any, gid_1?: any, gid_2?: any, gid_3?: any,
  hidden?: any,
  hide_score?: any,
  id?: any,
  is_crosspostable?: any,
  is_meta?: any,
  is_original_content?: any,
  is_reddit_media_domain?: any,
  is_robot_indexable?: any,
  is_self?: any,
  is_video?: any,
  likes?: any,
  link_flair_background_color?: any,
  link_flair_css_class?: any,
  link_flair_richtext?: any,
  link_flair_text?: any,
  link_flair_text_color?: any,
  link_flair_type?: any,
  locked?: any,
  media?: any,
  media_embed?: any,
  media_only?: any,
  mod_note?: any,
  mod_reason_by?: any,
  mod_reason_title?: any,
  mod_reports?: any,
  name?: any,
  no_follow?: any,
  num_comments?: any,
  num_crossposts?: any,
  num_reports?: any,
  over_18?: any,
  parent_whitelist_status?: any,
  permalink?: any,
  pinned?: any,
  post_hint?: any,
  preview?: any, images?: any, enabled?: any,
  pwls?: any,
  quarantine?: any,
  removal_reason?: any,
  report_reasons?: any,
  saved?: any,
  score?: any,
  secure_media?: any,
  secure_media_embed?: any,
  selftext?: any,
  selftext_html?: any,
  send_replies?: any,
  spoiler?: any,
  stickied?: any,
  subreddit?: any,
  subreddit_id?: any,
  subreddit_name_prefixed?: any,
  subreddit_subscribers?: any,
  subreddit_type?: any,
  suggested_sort?: any,
  thumbnail?: any,
  thumbnail_height?: any,
  thumbnail_width?: any,
  title?: any,
  total_awards_received?: any,
  ups?: any,
  url?: any,
  user_reports?: any,
  view_count?: any,
  visited?: any,
  whitelist_status?: any,
  wls?: any,
}