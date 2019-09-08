import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditFeedComponent } from './routes/reddit-feed/reddit-feed.component';
import { RedditThreadComponent } from './components/reddit-thread/reddit-thread.component';


const routes: Routes = [
  {path: '', component: RedditFeedComponent, pathMatch:'full'},
  {path: 'r/:subreddits', component: RedditFeedComponent},
  {path: 'r/:subreddit/comments/:id', component: RedditThreadComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
