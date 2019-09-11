import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditFeedComponent } from './routes/reddit-feed/reddit-feed.component';
import { RedditThreadComponent } from './components/reddit-thread/reddit-thread.component';
import { ThreadCommentsComponent } from './components/thread-comments/thread-comments.component';


const routes: Routes = [
  { path: '', component: RedditFeedComponent, pathMatch: 'full' },
  {
    path: 'r/:subreddits', component: RedditFeedComponent,
    children: [
      {
        path: 'comments/:id', component: RedditThreadComponent,
        children: [
          { path: '', component: ThreadCommentsComponent, pathMatch: 'full' },
          { path: ':commentId', component: ThreadCommentsComponent,},
          { path: '**', redirectTo: '' }
        ]
      },
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
