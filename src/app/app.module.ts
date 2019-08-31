import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './routes/work/work.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AppService } from './app.service';
import { RedditPostComponent } from './components/reddit-post/reddit-post.component';
import { RedditThreadComponent } from './components/reddit-thread/reddit-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    NavigationComponent,
    RedditPostComponent,
    RedditThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
