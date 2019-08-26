import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from './routes/work/work.component';


const routes: Routes = [
  {path: '', redirectTo: 'work', pathMatch:'full'},
  {path: 'work', component: WorkComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
