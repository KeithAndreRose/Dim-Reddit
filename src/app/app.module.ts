import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditFeedComponent } from './routes/reddit-feed/reddit-feed.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { RedditPostcardComponent } from './components/reddit-postcard/reddit-postcard.component';
import { RedditThreadComponent } from './components/reddit-thread/reddit-thread.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { MarkdownParserService } from './services/markdown-parser.service';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CommentComponent } from './components/comment/comment.component';
import { ThreadCommentsComponent } from './components/thread-comments/thread-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditFeedComponent,
    NavigationComponent,
    RedditPostcardComponent,
    RedditThreadComponent,
    SafeHtmlPipe,
    SidenavComponent,
    SidebarComponent,
    CommentComponent,
    ThreadCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MarkdownParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
