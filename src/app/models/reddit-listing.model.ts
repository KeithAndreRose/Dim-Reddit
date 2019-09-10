import { RedditComment } from './reddit-comment.model';
import { RedditLink } from './reddit-link.model';

export interface RedditListing {
  kind: "Listing",
  data:{
    after: string,
    before: null,
    children: unknown[] | RedditComment[] | RedditLink[],
    dist: number,
    modhash: string,
  }
}
