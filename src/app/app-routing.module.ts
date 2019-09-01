import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './routes/work/work.component';
import { RedditThreadComponent } from './components/reddit-thread/reddit-thread.component';


const routes: Routes = [
  {path: '', component: WorkComponent, pathMatch:'full'},
  {path: 'thread/:id', component: RedditThreadComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
